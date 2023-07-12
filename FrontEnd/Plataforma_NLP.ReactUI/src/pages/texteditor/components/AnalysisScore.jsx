export default function AnalysisScore({ name, limits, score }) {
  const percentage = score * 100;
  let barColor = '';

  if (score <= limits?.LSL) {
    barColor = 'bg-red-500';
  } else if (score < limits?.USL) {
    barColor = 'bg-yellow-500';
  } else {
    barColor = 'bg-green-500';
  }

  return (
    <div className="flex gap-4 mb-4 justify-evenly">
      <div className="text-lg font-semibold">{name}:</div>
      <div className="w-3/4 flex items-center">
        <div className="w-full h-4 bg-gray-200 rounded-full min-w-[150px]">
          <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percentage}%` }} />
        </div>
        <div className="ml-4 text-lg font-semibold">{percentage.toFixed(2)}%</div>
      </div>
    </div>
  );
}
