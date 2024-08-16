import axios from "axios";
import React, { useState } from "react";


const parseText = (text, label) => {
  return text
    .trim()
    .split('\n')
    .map((line, index) => {
      const [word, label] = line.split(' ');
      if (label === 'O') return <span
      key={index}
    >
      {word} {' '}
    </span>;
      const isComo = label && label.includes(label);
      return (
        <span
          key={index}
          className={`${isComo ? 'bg-yellow-300' : ''}`}
        >
          {word} {' '}
        </span>
      );
    });
};

export default function Objetivos() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://express-freeling-bridge-api.vercel.app/api/v1/freeling/objetive",
        {
          text: inputText,
        }
      );
      console.log(response)
      setResult(response.data);
    } catch (err) {
      setError(
        "Hubo un error al procesar el objetivo. Por favor intenta de nuevo."
      );
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 min-h-screen p-4 ">
       <div className={`flex-1 ${!result ? 'w-full mx-10' : 'w-1/2'} `}>
       <div className="p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Analizador de Objetivos
          </h1>
          <p className="text-center">Puede tardar más de 20 segundos</p>
          <form onSubmit={handleSubmit} className="mt-6">
            <textarea
              className="w-full p-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Escribe aquí tu objetivo académico..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              {loading ? "Analizando..." : "Analizar"}
            </button>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        </div>
      </div>
    {result && (
          <div className="flex-1 w-1/2 mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700">Resultado:</h2>
            <div>
              <h2 className="font-bold">¿Qué?</h2>
              <div className="text-lg text-wrap overflow-auto leading-relaxed">{parseText(result?.QUE, 'QUE')}</div>
            </div>
            <div>
              <h2 className="font-bold">¿Cómo?</h2>
              <div className="text-lg text-wrap overflow-auto leading-relaxed">{parseText(result?.COMO, 'COMO')}</div>
            </div>
            <div>
              <h2 className="font-bold">¿Para qué?</h2>
              <div className="text-lg text-wrap overflow-auto leading-relaxed">{parseText(result?.PARAQUE, 'PARAQUE')}</div>
            </div>
        </div>)}
    </div>

  );
}
