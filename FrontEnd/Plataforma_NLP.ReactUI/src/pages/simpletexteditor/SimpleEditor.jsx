import React, { useEffect, useState } from 'react';
import { useLazyGetFreelingResultsQuery } from '../../api/defaultApi';
import AnalysisResults from './components/AnalysisResults';
import AnalysisSelector from './components/AnalysisSelector';
import { analyzeText, createWordDictionary } from './functions/processingText';

function SimpleEditor() {
    const [result, setResult] = useState(null);
    const [getFreelingAnalysis, freelingStatus] = useLazyGetFreelingResultsQuery();

    const [selectedOption, setSelectedOption] = useState({
        section: '',
        density: { LSL: 0, USL: 0 },
        sophistication: { LSL: 0, USL: 0 },
        variety: { LSL: 0, USL: 0 },
    });

    const handleChange = (event) => {
        const text = event.target.value;
        const dictionary = createWordDictionary(text);
        const highlightedText = analyzeText(text, dictionary);
        setResult(highlightedText);
    };

    useEffect(() => { console.log(freelingStatus) }, [freelingStatus]);

    return (
        <div className="flex h-[calc(100vh-210px)] m-10">
            <div className="flex flex-col flex-grow">
                <textarea onChange={handleChange} className='flex-1 resize-none' />
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