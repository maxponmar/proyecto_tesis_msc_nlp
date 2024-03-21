import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLazyGetFreelingResultsQuery } from "../../api/defaultApi";
import Wordgroups from "./components/Wordgroups";

const FreelingApplication = () => {
  const [text, setText] = useState("");
  const [getFreelingAnalysis, freelingStatus] =
    useLazyGetFreelingResultsQuery();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleProcessText = () => {
    if (text === "") {
      toast.error("El texto no puede estar vacío");
      return;
    }
    getFreelingAnalysis({ text });
  };

  const descargarArchivo = () => {
    const contenido = freelingStatus.data?.result;
    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = url;
    enlaceDescarga.download = "freeling.txt";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto">
      <form
        className="max-w-xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleProcessText();
        }}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Texto
        </label>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Coloque un texto para procesar con FreeLing"
          rows="4"
          value={text}
          onChange={handleTextChange}
        ></textarea>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 focus:outline-none"
        >
          Procesar con Freeling
        </button>
      </form>
      <div className="max-w-[800px] mx-auto flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 ">
        {freelingStatus.isError ? (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
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
              <span className="font-medium">Error!</span> Ocurrió un error al
              procesar el texto.
            </div>
          </div>
        ) : freelingStatus.isFetching ? (
          <div className="px-3 py-4 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">
            Procesando...
          </div>
        ) : freelingStatus.data ? (
          <div className="p-5">
            <h2 className="font-bold text-xl">Resultado Freeling:</h2>
            <div>
              {freelingStatus.data?.result?.split("\n")?.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 inline-flex justify-center items-center gap-1"
              onClick={descargarArchivo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <p>Descargar resultados</p>
            </button>

            <Wordgroups data={freelingStatus.data?.wordGroups} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FreelingApplication;
