import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../../appwrite/appwriteConfig";

export default function Encuesta() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();

  useEffect(() => {
    databases
      .listDocuments("65f3a533889a5597444f", "6657f7b9ea514dba51be")
      .then((response) => {
        if (response?.documents[0]) {
          const encuesta = JSON.parse(response?.documents[0]?.encuesta);
          setQuestions(encuesta);
          setCurrentQuestion(encuesta[0]);
        }
      })
      .catch((error) => {
        toast.error("Error " + error);
        setQuestions([]);
      });
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 mt-8">
      <h2 className="text-4xl font-extrabold">
        Hola 👋🏻, Agradeceriamos que respondieras las siguientes preguntas
      </h2>
      {currentQuestion && (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {currentQuestion?.pregunta}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            {currentQuestion?.rango}
          </p>
          {currentQuestion?.rango ? (
            <input
              type="range"
              min="1"
              max="10"
              defaultValue={5}
              onChange={(e) => {
                setQuestions((prev) => {
                  const newQuestions = [...prev];

                  newQuestions[currentQuestion?.id - 1].respuesta =
                    e.target.value;

                  return newQuestions;
                });
                setCurrentAnswer(e.target.value);
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          ) : (
            <textarea
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tus opiniones aquí..."
              onChange={(e) => {
                setQuestions((prev) => {
                  const newQuestions = [...prev];

                  newQuestions[currentQuestion?.id - 1].respuesta =
                    e.target.value;

                  return newQuestions;
                });
                setCurrentAnswer(e.target.value);
              }}
            ></textarea>
          )}
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {currentQuestion?.rango
              ? currentAnswer
                ? "Tu respuesta: " + currentAnswer
                : "Selecciona una respuesta"
              : "Opción abierta"}
          </label>

          <button
            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={async () => {
              if (!currentAnswer) {
                toast.error("Selecciona una respuesta");
                return;
              }
              const nextQuestion = questions.find(
                (question) => question.id === currentQuestion.id + 1
              );

              if (nextQuestion) {
                setCurrentQuestion(nextQuestion);
                setCurrentAnswer(null);
              } else {
                toast.loading("Enviando respuestas, muchas gracias", questions);
                const createNewDocument = await databases.createDocument(
                  "65f3a533889a5597444f",
                  "6657f6b867938dc495ad",
                  uuidv4(),
                  {
                    respuestas: JSON.stringify(questions),
                  }
                );
                toast.dismiss();
                toast.success("Gracias por responder la encuesta");
                console.log(createNewDocument);
                window.location.reload();
              }
            }}
          >
            {currentQuestion?.id === questions.length ? "Enviar" : "Siguiente"}
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
          </button>
        </div>
      )}
    </div>
  );
}
