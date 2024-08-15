import axios from "axios";
import React, { useState } from "react";

export default function Objetivos() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://conectividad-objetivos-open-ai.vercel.app/analizar_objetivo",
        {
          objetivo: inputText,
        }
      );
      setResult(response.data.resultado);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Analizador de Objetivos
        </h1>
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
        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700">Resultado:</h2>
            <p className="mt-2 text-gray-800">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
