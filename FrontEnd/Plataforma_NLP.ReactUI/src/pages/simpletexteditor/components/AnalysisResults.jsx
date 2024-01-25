import AnalysisScore from './AnalysisScore';

export default function AnalysisResults({ analyses, repeatedWords, commonWords, selectedOptionLimits }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Resultados</h2>
      <p>
        Palabras Repetidas: <span className="font-bold text-xl">{repeatedWords}</span>
      </p>
      <p>
        Palabras Comunes: <span className="font-bold text-xl">{commonWords}</span>
      </p>
      <AnalysisScore name={analyses[0].name} score={analyses[0].score} limits={selectedOptionLimits.variety} />
      <AnalysisScore name={analyses[1].name} score={analyses[1].score} limits={selectedOptionLimits.density} />
      <AnalysisScore name={analyses[2].name} score={analyses[2].score} limits={selectedOptionLimits.sophistication} />
    </div>
  );
}
