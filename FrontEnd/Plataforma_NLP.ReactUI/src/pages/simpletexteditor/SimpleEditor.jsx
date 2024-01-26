import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useLazyGetFreelingResultsQuery } from '../../api/defaultApi';
import AnalysisResults from './components/AnalysisResults';
import AnalysisSelector from './components/AnalysisSelector';
import { addDataToDataBase, eliminarPalabrasRelacionadasDelTexto, openDataBase } from './functions/indexDb';
import { analyzeText, createWordDictionary } from './functions/processingText';

function SimpleEditor() {
    const [userInput, setUserInput] = useState("");
    const [debouncedInput] = useDebounce(userInput, 1000);

    const [result, setResult] = useState(null);
    const [getFreelingAnalysis, freelingStatus] = useLazyGetFreelingResultsQuery();

    const [selectedOption, setSelectedOption] = useState({
        section: '',
        density: { LSL: 0, USL: 0 },
        sophistication: { LSL: 0, USL: 0 },
        variety: { LSL: 0, USL: 0 },
    });

    useEffect(() => {
        if (debouncedInput.length === 0) return;

        let filteredText = "";
        openDataBase((db) => {
            eliminarPalabrasRelacionadasDelTexto(db, userInput, function (filteredText) {
                // Freeling
                if (filteredText.length === 0) {
                    console.log("No hay palabras nuevas");
                    const dictionary = createWordDictionary(debouncedInput);
                    const highlightedText = analyzeText(debouncedInput, dictionary);
                    setResult(highlightedText);
                } else {
                    console.warn("Palabras nuevas: " + filteredText)
                    getFreelingAnalysis({ text: filteredText });
                }
            });
        });



    }, [debouncedInput]);

    useEffect(() => {
        if (freelingStatus.isSuccess) {
            console.log("se econtro data de freeling")
            openDataBase((db) => {
                addDataToDataBase(db, freelingStatus.data?.wordGroups);
            });

            let filteredText = "";
            openDataBase((db) => {
                eliminarPalabrasRelacionadasDelTexto(db, userInput, function (filteredText) {
                    if (filteredText.length === 0) return;
                    const dictionary = createWordDictionary(filteredText);
                    const highlightedText = analyzeText(filteredText, dictionary);
                    setResult(highlightedText);
                });
            });


        }
    }, [freelingStatus])

    return (
        <div className="flex h-[calc(100vh-210px)] m-10">
            <div className="flex flex-col flex-grow">
                <textarea onChange={(e) => { setUserInput(e.target.value) }} className='flex-1 resize-none' />
                <div className='flex-1 mt-2'>
                    {result ? <p>{result.highlightedText}</p> : null}
                </div>
                <button className='px-4 py-2 rounded bg-blue-400 text-black' onClick={() => {
                    getFreelingAnalysis({ text: "hola esta es una prueba de freeling" });

                }}>Freeling</button>
            </div>
            <div className="flex flex-col flex-basis[300px] flex-shrink-0 ml-5">
                <AnalysisSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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