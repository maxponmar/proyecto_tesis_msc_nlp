import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { databases } from "../../appwrite/appwriteConfig";
import { first100Chars } from "./helpers/textHelpers";

function traducirTexto(texto) {
  var traducciones = {
    Densidad: "density",
    Sofisticación: "sophistication",
    Variedad: "variety",
  };

  return traducciones[texto];
}

export default function Historial() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    databases
      .listDocuments("65f3a533889a5597444f", "65f3a5638c7727c66337")
      .then((response) => {
        console.log(response);
        setHistory(response?.documents ?? []);
      })
      .catch((error) => {
        console.error("Error", error);
        setHistory([]);
      });
  }, []);

  return (
    <div className="m-4 flex flex-wrap gap-4">
      {history.length === 0 ? (
        <div
          className="w-full flex items-center justify-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"
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
            <span className="font-medium">Ojo</span>, No hay contenido
            disponible para mostrar.
          </div>
        </div>
      ) : (
        <>
          {history.map((item, index) => {
            let results = {};
            try {
              results = JSON.parse(item?.comments);
              console.log("Scores", results);
            } catch (error) {
              return (
                <div
                  key={index}
                  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
                >
                  <div className="flex flex-wrap items-center justify-around mb-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {item?.title}
                    </h5>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                      Creado el:{" "}
                      {dayjs(item?.$createdAt).format("DD/MMM/YYYY hh:mm:ss A")}
                    </span>
                  </div>
                  <p className="mb-3 font-normal text-gray-700">
                    {first100Chars(item?.content)}
                  </p>
                  <p className="mb-3 font-normal text-gray-700">
                    Los resultados no tienen el formato correcto.
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    Última actualización:{" "}
                    {dayjs(item?.$updatedAt).format("DD/MMM/YYYY hh:mm:ss A")}
                  </span>
                  <Link
                    to="/riquezalexica"
                    className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Reanudar
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              );
            }

            let scores = results?.scores?.map((score, index) => {
              let section = score?.name;
              let result = score?.score;
              let limits = results?.option[traducirTexto(section)];
              console.log("Limites", limits);
              const percentage = result * 100;
              let barColor = "";
              let status = "";

              if (result <= limits?.LSL) {
                barColor = "text-red-500";
                status = "bad";
              } else if (result < limits?.USL) {
                barColor = "text-yellow-500";
                status = "medium";
              } else {
                barColor = "text-green-500";
                status = "good";
              }

              return (
                <div key={index} className="w-3/4 flex items-center">
                  <p>{section}</p>
                  <div className={`ml-4 text-lg font-semibold ${barColor}`}>
                    {percentage.toFixed(2)}%
                  </div>
                </div>
              );
            });

            return (
              <div
                key={index}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
              >
                <div className="flex flex-wrap items-center justify-around mb-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {item?.title}
                  </h5>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    Creado el:{" "}
                    {dayjs(item?.$createdAt).format("DD/MMM/YYYY hh:mm:ss A")}
                  </span>
                </div>
                <p className="mb-3 font-normal text-gray-700">
                  {first100Chars(item?.content)}
                </p>
                {scores}
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                  Última actualización:{" "}
                  {dayjs(item?.$updatedAt).format("DD/MMM/YYYY hh:mm:ss A")}
                </span>
                <Link
                  to="/riquezalexica"
                  className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Reanudar
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
