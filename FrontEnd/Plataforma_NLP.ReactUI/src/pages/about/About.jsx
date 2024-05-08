import React from "react";
import { BiEnvelope, BiWorld } from "react-icons/bi";

export default function About() {
  return (
    <div className="w-full flex items-center justify-center gap-4 mt-10">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 my-3 rounded-full shadow-lg"
            src="/SamuelGonzalezLopez-Profile.jpeg"
            alt="Perfil Samuel González López"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Samuel González López
          </h5>
          <span className="text-sm text-gray-500">Director del Proyecto</span>
          <span className="text-sm text-gray-500">
            samuelgonzalezlopez@gmail.com
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="mailto:samuelgonzalezlopez@gmail.com?subject=Retmeproo"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-center gap-2"
            >
              Enviar Correo <BiEnvelope />
            </a>
            <a
              href="https://samuelgonzalez-lopez.com/"
              target="_blank"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 flex items-center justify-center gap-2"
            >
              Página Web <BiWorld />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 my-3 rounded-full shadow-lg"
            src="/MaximilianoPonceMarquez-Profile.jpeg"
            alt="Perfil Maximiliano Ponce Marquez"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Maximiliano Ponce Marquez
          </h5>
          <span className="text-sm text-gray-500">
            Desarrollador, Aportador
          </span>
          <span className="text-sm text-gray-500">
            contacto@maximilianoponce.com
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="mailto:contacto@maximilianoponce.com?subject=Retmeproo"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-center gap-2"
            >
              Enviar Correo <BiEnvelope />
            </a>
            <a
              href="https://maximilianoponce.com/"
              target="_blank"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 flex items-center justify-center gap-2"
            >
              Página Web <BiWorld />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
