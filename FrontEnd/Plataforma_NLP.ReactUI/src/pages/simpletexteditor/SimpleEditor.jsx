import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useLazyGetFreelingResultsQuery } from "../../api/defaultApi";
import AnalysisResults from "./components/AnalysisResults";
import AnalysisSelector from "./components/AnalysisSelector";
import {
  buscarPalabraBase,
  construirDiccionario,
  eliminarPalabrasSecundarias,
  openDataBase,
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

  const analyzeText = (text) => {};

  useEffect(() => {
    if (debouncedInput.length === 0) return;

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
    if (textToAnalyze.length === 0) return;
    construirDiccionario(textToAnalyze).then((diccionario) => {
      let processedDictionary = procesarDiccionario(diccionario);
      setWordDictionary(processedDictionary);
    });
  }, [textToAnalyze]);

  useEffect(() => {
    if (Object.keys(wordDictionary).length === 0) return;

    const highlightedText = analyzeText(textToAnalyze, wordDictionary.dict);

    console.log("texto resultado: ", highlightedText);

    setResult(highlightedText);
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
          {result ? <p>{result.highlightedText}</p> : null}
        </div>
        <button
          className="px-4 py-2 rounded bg-blue-400 text-black"
          onClick={() => {
            openDataBase((db) => {
              const palabraABuscar = "gas";

              buscarPalabraBase(db, palabraABuscar, function (palabraBase) {
                console.log(palabraBase);
                // if (palabraBase) {
                //     console.log(`La palabra base de "${palabraABuscar}" es "${palabraBase}".`);
                // } else {
                //     console.log(`No se encontró una palabra base para "${palabraABuscar}".`);
                // }
              });
            });
          }}
        >
          Test Button
        </button>
      </div>
      <div className="flex flex-col flex-basis[300px] flex-shrink-0 ml-5">
        <AnalysisSelector
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {result ? (
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
