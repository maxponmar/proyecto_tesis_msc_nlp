import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDebounce } from "use-debounce";
import { v4 as uuidv4 } from "uuid";
import { useLazyGetFreelingResultsQuery } from "../../api/defaultApi";
import { databases } from "../../appwrite/appwriteConfig";
import { compararTextos } from "../../utils/Textcomparator";
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
  const [title, setTitle] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [debouncedInput] = useDebounce(userInput, 1000);

  const [ultimoGuardado, setUltimoGuardado] = useState(null);
  const [guardadoMensaje, setGuardadoMensaje] = useState("");

  const [textToAnalyze, setTextToAnalyze] = useState("");
  const [textToAnalyzeCopy, setTextToAnalyzeCopy] = useState("");

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

  const guardarTexto = async () => {
    if (textToAnalyze.length === 0) {
      toast.error("No hay texto para guardar");
      return;
    }

    const differencia = compararTextos(textToAnalyze, textToAnalyzeCopy);
    console.log("Diferencia: " + differencia);

    if (differencia > 30) {
      setGuardadoMensaje("Guardado hace menos de 1 minuto");
      console.log("Guardando texto...");

      const existingDocuments = await databases.listDocuments(
        "65f3a533889a5597444f",
        "65f3a5638c7727c66337",
        [Query.equal("title", title)]
      );

      console.log(existingDocuments);

      if (existingDocuments.total === 1) {
        const createNewDocument = await databases.updateDocument(
          "65f3a533889a5597444f",
          "65f3a5638c7727c66337",
          existingDocuments.documents[0].$id,
          {
            title,
            content: textToAnalyze,
            comments: "Texto guardado desde la plataforma NLP",
          }
        );
        console.log(createNewDocument);
      } else {
        const createNewDocument = await databases.createDocument(
          "65f3a533889a5597444f",
          "65f3a5638c7727c66337",
          uuidv4(),
          {
            title,
            content: textToAnalyze,
            comments: "Texto guardado desde la plataforma NLP",
          }
        );
        console.log(createNewDocument);
      }

      // promise.then((response) => {
      //   console.log(response);
      // });

      console.log("Texto guardado:", textToAnalyze);
      setTextToAnalyzeCopy(textToAnalyze);

      // Actualizamos la hora del último guardado
      setUltimoGuardado(new Date());
    }
  };

  const guardarTextoManualmente = async () => {
    if (textToAnalyze.length === 0) {
      toast.error("No hay texto para guardar");
      return;
    }

    const differencia = compararTextos(textToAnalyze, textToAnalyzeCopy);
    console.log("Diferencia: " + differencia);

    if (differencia > 0) {
      setGuardadoMensaje("Guardado hace menos de 1 minuto");
      console.log("Guardando texto...");

      const existingDocuments = await databases.listDocuments(
        "65f3a533889a5597444f",
        "65f3a5638c7727c66337",
        [Query.equal("title", title)]
      );

      console.log(existingDocuments);

      if (existingDocuments.total === 1) {
        const createNewDocument = await databases.updateDocument(
          "65f3a533889a5597444f",
          "65f3a5638c7727c66337",
          existingDocuments.documents[0].$id,
          {
            title,
            content: textToAnalyze,
            comments: "Texto guardado desde la plataforma NLP",
          }
        );
        console.log(createNewDocument);
      } else {
        const createNewDocument = await databases.createDocument(
          "65f3a533889a5597444f",
          "65f3a5638c7727c66337",
          uuidv4(),
          {
            title,
            content: textToAnalyze,
            comments: "Texto guardado desde la plataforma NLP",
          }
        );
        console.log(createNewDocument);
      }

      // promise.then((response) => {
      //   console.log(response);
      // });

      console.log("Texto guardado:", textToAnalyze);

      // Actualizamos la hora del último guardado
      setUltimoGuardado(new Date());
    }

    setTextToAnalyzeCopy(textToAnalyze);
  };

  useEffect(() => {
    if (textToAnalyze.length === 0) {
      return;
    }

    // setGuardadoMensaje("Guardado hace menos de 1 minuto");
    // console.log("Guardando texto...");
    // const promise = databases.createDocument(
    //   "65f3a533889a5597444f",
    //   "65f3a5638c7727c66337",
    //   uuidv4(),
    //   {
    //     content: textToAnalyze,
    //     comments: "Texto guardado desde la plataforma NLP",
    //   }
    // );

    // promise.then((response) => {
    //   console.log(response);
    // });

    // console.log("Texto guardado:", textToAnalyze);

    // // Actualizamos la hora del último guardado
    // setUltimoGuardado(new Date());
  }, [textToAnalyzeCopy]);

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
      return wordDictionary[lowerWord] && wordDictionary[lowerWord].esComun;
    });

    const repeatedWords = nonStopWords.filter((word) => {
      const lowerWord = word.toLowerCase();
      return (
        wordDictionary[lowerWord] && wordDictionary[lowerWord].contador > 1
      );
    });

    const uniqueWords = new Set(nonStopWords);

    // console.log("nonStopWords: ", nonStopWords);
    // console.log("uniqueWords: ", uniqueWords);
    // console.log("commonWords: ", commonWords);

    const N = cleanText.length;
    const Nlex = nonStopWords.length;
    const Tlex = uniqueWords.size;
    const Nslex = Nlex - commonWords.length;

    // console.log("N: " + N);
    // console.log("Nlex: " + Nlex);
    // console.log("Tlex: " + Tlex);
    // console.log("Nslex: " + Nslex);

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
        } else if (wordDictionary[lowerPart].contador > 1) {
          return (
            <span key={index} className="text-red-500">
              {part}
            </span>
          );
        } else if (wordDictionary[lowerPart].esComun) {
          return (
            <span key={index} className="font-bold bg-yellow-400">
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

  // Efecto para guardar automáticamente después de 10 minutos
  useEffect(() => {
    const intervaloGuardadoAutomatico = setInterval(() => {
      guardarTexto();
    }, 600000); // 600000 milisegundos = 10 minutos

    return () => clearInterval(intervaloGuardadoAutomatico);
  }, []);

  useEffect(() => {
    const intervaloActualizacionMensaje = setInterval(() => {
      if (ultimoGuardado) {
        const ahora = new Date();
        const diferencia = ahora - ultimoGuardado;
        const minutos = Math.floor(diferencia / 60000);

        if (minutos === 1) {
          setGuardadoMensaje("Guardado por última vez hace 1 minuto");
        } else {
          setGuardadoMensaje(`Guardado por última vez hace ${minutos} minutos`);
        }
      }
    }, 60000); // Verifica cada minuto

    return () => clearInterval(intervaloActualizacionMensaje);
  }, [ultimoGuardado]);

  useEffect(() => {
    setAnalyzing(true);
  }, [userInput]);

  useEffect(() => {
    if (debouncedInput.length === 0 || selectedOption.section.length === 0)
      return;

    eliminarPalabrasSecundarias(debouncedInput.trim()).then((filteredText) => {
      if (filteredText.length === 0) {
        // console.log("No hay palabras nuevas");
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
        // console.log("No se encontro data de freeling");
        return;
      }

      // console.log(
      //   "se econtro data de freeling: " +
      //     Object.keys(freelingStatus.data?.wordGroups).length +
      //     " palabra/s"
      // );

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
    // console.log("Texto para analizar: ", textToAnalyze);
  }, [textToAnalyze]);

  useEffect(() => {
    setAnalyzing(false);

    if (Object.keys(wordDictionary).length === 0 || textToAnalyze.length === 0)
      return;

    const result = analyzeText(textToAnalyze, wordDictionary.dict);

    console.log("resultado de analisis: ", result);
    setResult(result);
    guardarTexto(textToAnalyze);
  }, [wordDictionary]);

  return (
    <div
      className={`flex h-[calc(100vh-210px)] m-2  ${
        selectedOption.section.length === 0 || title.length < 5
          ? "justify-start flex-col items-center"
          : "justify-center"
      } `}
    >
      {selectedOption.section && title.length > 5 ? (
        <div className="flex flex-col flex-grow ">
          <textarea
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            className="flex-1 resize-none"
          />
          <div className="text-sm flex items-center justify-center my-2 gap-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-2 py-1 text-center   inline-flex items-center justify-center gap-2 max-w-48"
              onClick={guardarTextoManualmente}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Guardar avances
            </button>
            <p>{guardadoMensaje}</p>
          </div>

          <div className="text-sm ">
            {result ? <p>{result.highlightedText}</p> : null}
          </div>
        </div>
      ) : (
        <div
          className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 h-20 w-96"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Bienvenid@</span> Seleccione una
            opción para comenzar
          </div>
        </div>
      )}

      <div className="flex flex-col mx-2 items-center">
        <AnalysisSelector
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setTitle={setTitle}
        />
        {analyzing ? (
          <div role="status" className="flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="w-16 h-16 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Cargando...</span>
          </div>
        ) : result &&
          selectedOption.section &&
          !analyzing &&
          title.length > 5 ? (
          <AnalysisResults
            analyses={result.scores}
            commonWords={result.commonWords}
            repeatedWords={result.repeatedWords}
            selectedOptionLimits={selectedOption}
          />
        ) : (
          <p className="max-w-[300px] p-4">
            Introduzca un titulo de almenos 5 caracteres y seleccione una opción
            para ver los resultados
          </p>
        )}
      </div>
    </div>
  );
}

export default SimpleEditor;
