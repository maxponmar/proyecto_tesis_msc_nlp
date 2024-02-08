import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useLazyGetFreelingResultsQuery } from "../../api/defaultApi";
import AnalysisResults from "./components/AnalysisResults";
import AnalysisSelector from "./components/AnalysisSelector";
import {
  construirDiccionario,
  eliminarPalabrasSecundarias,
  procesarDiccionario,
  saveWordGruopsToDB,
} from "./functions/indexDb";

function SimpleEditor() {
  const [userInput, setUserInput] = useState("");
  const [debouncedInput] = useDebounce(userInput, 1000);

  const [textToAnalyze, setTextToAnalyze] = useState("");

  const [wordDictionary, setWordDictionary] = useState({});
  const [result, setResult] = useState(null);
  const [getFreelingAnalysis, freelingStatus] =
    useLazyGetFreelingResultsQuery();

  const [selectedOption, setSelectedOption] = useState({
    section: "",
    density: { LSL: 0, USL: 0 },
    sophistication: { LSL: 0, USL: 0 },
    variety: { LSL: 0, USL: 0 },
  });

  const analyzeText = (text) => {
    const textParts = text.match(/\w+|\W+/g);
    const cleanText = text.match(/\b(\w+)\b/g);

    if (cleanText === null || textParts === null) return;
    let nonStopWords = [];

    for (var key in wordDictionary) {
      if (wordDictionary[key].esStopword === false) {
        nonStopWords.push(key);
      }
    }

    const commonWords = nonStopWords.filter((word) => {
      const lowerWord = word.toLowerCase();
      return (
        wordDictionary[lowerWord] && wordDictionary[lowerWord].isCommonWord
      );
    });

    const repeatedWords = nonStopWords.filter((word) => {
      const lowerWord = word.toLowerCase();
      return (
        wordDictionary[lowerWord] && wordDictionary[lowerWord].contador > 1
      );
    });

    const uniqueWords = new Set(nonStopWords);

    console.log("nonStopWords: ", nonStopWords);
    console.log("uniqueWords: ", uniqueWords);
    console.log("commonWords: ", commonWords);

    const N = cleanText.length;
    const Nlex = nonStopWords.length;
    const Tlex = uniqueWords.size;
    const Nslex = Nlex - commonWords.length;

    console.log("N: " + N);
    console.log("Nlex: " + Nlex);
    console.log("Tlex: " + Tlex);
    console.log("Nslex: " + Nslex);

    const scores = [
      {
        name: "Variedad",
        score: Tlex / Nlex,
      },
      {
        name: "Densidad",
        score: Tlex / N,
      },
      {
        name: "Sofisticación",
        score: Nslex / Nlex,
      },
    ];

    const highlightedText = textParts.map((part, index) => {
      if (part === " ") return <span key={index}>&nbsp;</span>;
      const lowerPart = part.toLowerCase();
      if (/\w+/.test(part) && wordDictionary[lowerPart]) {
        if (wordDictionary[lowerPart].esStopword) {
          return <span key={index}>{part}</span>;
        } else if (wordDictionary[lowerPart].esComun) {
          return (
            <span key={index} className="font-bold bg-yellow-400">
              {part}
            </span>
          );
        } else if (wordDictionary[lowerPart].contador > 1) {
          return (
            <span key={index} className="text-red-500">
              {part}
            </span>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      }
      return <span>{part}</span>;
    });

    return {
      scores,
      highlightedText,
      repeatedWords: repeatedWords.length,
      commonWords: commonWords.length,
    };
  };

  useEffect(() => {
    if (debouncedInput.length === 0 || selectedOption.section.length === 0)
      return;

    eliminarPalabrasSecundarias(debouncedInput.trim()).then((filteredText) => {
      if (filteredText.length === 0) {
        console.log("No hay palabras nuevas");
        setTextToAnalyze(debouncedInput);
        return;
      }

      // Buscar palabras nuevas con Freeling
      getFreelingAnalysis({ text: filteredText });
    });
  }, [debouncedInput]);

  useEffect(() => {
    if (freelingStatus.isSuccess) {
      if (freelingStatus.data?.wordGroups === undefined) {
        console.log("No se encontro data de freeling");
        return;
      }

      console.log(
        "se econtro data de freeling: " +
          Object.keys(freelingStatus.data?.wordGroups).length +
          " palabra/s"
      );

      saveWordGruopsToDB(freelingStatus.data?.wordGroups);

      setTextToAnalyze(debouncedInput);
    }
  }, [freelingStatus]);

  useEffect(() => {
    if (textToAnalyze.length === 0 || selectedOption.section.length === 0)
      return;
    construirDiccionario(textToAnalyze).then((diccionario) => {
      let processedDictionary = procesarDiccionario(diccionario);
      setWordDictionary(processedDictionary);
    });
  }, [textToAnalyze]);

  useEffect(() => {
    if (Object.keys(wordDictionary).length === 0 || textToAnalyze.length === 0)
      return;

    const result = analyzeText(textToAnalyze, wordDictionary.dict);

    console.log("resultado de analisis: ", result);
    setResult(result);
  }, [wordDictionary]);

  return (
    <div className="flex h-[calc(100vh-210px)] m-10">
      <div className="flex flex-col flex-grow">
        <textarea
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          className="flex-1 resize-none"
        />
        <div className="flex-1 mt-2">
          {result && selectedOption.section ? (
            <p>{result.highlightedText}</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col flex-basis[300px] flex-shrink-0 ml-5">
        <AnalysisSelector
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {result && selectedOption.section ? (
          <AnalysisResults
            analyses={result.scores}
            commonWords={result.commonWords}
            repeatedWords={result.repeatedWords}
            selectedOptionLimits={selectedOption}
          />
        ) : (
          <p>Seleccione una opción para ver los resultados</p>
        )}
      </div>
    </div>
  );
}

export default SimpleEditor;
