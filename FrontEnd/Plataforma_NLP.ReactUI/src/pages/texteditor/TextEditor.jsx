import { useState } from 'react';
import ReactQuill from 'react-quill';
import AnalysisResults from './components/AnalysisResults';
import AnalysisSelector from './components/AnalysisSelector';
import { editorHeaderModules } from './components/Options';

export default function TextEditor() {
  const [value, setValue] = useState(`
  <p><span style="background-color: yellow;">hola XDDD</span></p>`);

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

  return (
    <div className="relative h-screen w-full bg-white p-2">
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative h-full w-2/3 flex items-center justify-center">
          <ReactQuill
            className="h-full w-full"
            theme="snow"
            value={value}
            onChange={setValue}
            modules={editorHeaderModules}
          />
        </div>
        <div className="relative h-full w-1/3 flex flex-col items-center justify-start gap-4 text-center">
          <AnalysisSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          <AnalysisResults
            analyses={analysisResult}
            duplicateWords={10}
            commonWords={20}
            selectedOptionLimits={selectedOption}
          />
        </div>
      </div>
    </div>
  );
}
