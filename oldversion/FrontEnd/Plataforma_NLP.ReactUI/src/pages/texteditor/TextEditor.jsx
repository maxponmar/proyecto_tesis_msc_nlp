import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { useDebounce } from 'use-debounce';
import AnalysisResults from '../simpletexteditor/components/AnalysisResults';
import AnalysisSelector from '../simpletexteditor/components/AnalysisSelector';
import { editorHeaderModules } from '../simpletexteditor/functions/Options';
import AnalyzeText from './functions/AnalyzeText';
import HighLightCommonWords from './functions/HighlightCommonWords';

export default function TextEditor() {
  const [userInput, setUserInput] = useState();
  const [debouncedInput] = useDebounce(userInput, 500);

  const [totalCommonWords, setTotalCommonWords] = useState(0);
  const [totalRepeatedWords, setTotalRepeatedWords] = useState(0);

  const [showResults, setShowResults] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    section: '',
    density: { LSL: 0, USL: 0 },
    sophistication: { LSL: 0, USL: 0 },
    variety: { LSL: 0, USL: 0 },
  });

  const [analysisResult, setAnalysisResult] = useState([
    {
      name: 'Variedad',
      score: 0,
    },
    {
      name: 'Densidad',
      score: 0,
    },
    {
      name: 'Sofisticación',
      score: 0,
    },
  ]);

  const [lastFetch, setLastFetch] = useState(Date.now());
  const quillRef = useRef();
  useEffect(() => {
    // Solo ejecuta el efecto si han pasado 500 milisegundos desde la última vez
    if (Date.now() - lastFetch > 1000) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(userInput, 'text/html');
      let texto = doc.body.textContent;

      var analysisResults = AnalyzeText(texto);
      setAnalysisResult(analysisResults);

      let highlightData = HighLightCommonWords(texto);
      setTotalCommonWords(highlightData.totalCommonWords);
      setTotalRepeatedWords(highlightData.totalRepeatedWords);

      setUserInput(highlightData.highlightedText);
      setLastFetch(Date.now());

      setShowResults(texto.length > 0 && selectedOption.section.length > 0);
    }
  }, [debouncedInput, lastFetch]);

  useEffect(() => {
    const quill = quillRef.current.getEditor(); // Obtiene la instancia de Quill
    const length = quill.getLength(); // Obtiene la longitud del contenido actual
    quill.setSelection(length, length); // Mueve el cursor al final
  }, [userInput]);

  return (
    <div className="h-screen w-full bg-white p-2 flex items-center justify-center">
      <div className="h-full w-2/3 flex flex-col items-center justify-center">
        <ReactQuill
          className="h-full w-full"
          theme="snow"
          modules={editorHeaderModules}
          value={userInput}
          onChange={setUserInput}
          ref={quillRef}
        />
      </div>
      <div className="relative h-full w-1/3 flex flex-col items-center justify-start gap-4 text-center">
        <AnalysisSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        {showResults > 0 ? (
          <AnalysisResults
            analyses={analysisResult}
            commonWords={totalCommonWords}
            repeatedWords={totalRepeatedWords}
            selectedOptionLimits={selectedOption}
          />
        ) : (
          <p>Seleccione una opción para ver los resultados</p>
        )}
      </div>
    </div>
  );
}
