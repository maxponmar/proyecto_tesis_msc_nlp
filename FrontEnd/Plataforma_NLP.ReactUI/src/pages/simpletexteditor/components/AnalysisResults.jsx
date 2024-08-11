import { Tooltip } from "react-tooltip";
import AnalysisScore from "./AnalysisScore";

export default function AnalysisResults({
  analyses,
  repeatedWords,
  commonWords,
  selectedOptionLimits,
}) {
  return (
    <div className="mx-5">
      <h2 className="text-3xl font-bold mb-6">Resultados</h2>
      <p>
        Palabras Repetidas:{" "}
        <span className="font-bold text-xl">{repeatedWords}</span>
      </p>
      <p>
        Palabras Comunes:{" "}
        <span className="font-bold text-xl">{commonWords}</span>
      </p>
      <AnalysisScore
        name={analyses[0].name}
        description={analyses[0].description}
        score={analyses[0].score}
        limits={selectedOptionLimits.variety}
      />
      <AnalysisScore
        name={analyses[1].name}
        description={analyses[1].description}
        score={analyses[1].score}
        limits={selectedOptionLimits.density}
      />
      <AnalysisScore
        name={analyses[2].name}
        description={analyses[2].description}
        score={analyses[2].score}
        limits={selectedOptionLimits.sophistication}
      />
      <Tooltip id="my-tooltip" />
    </div>
  );
}
