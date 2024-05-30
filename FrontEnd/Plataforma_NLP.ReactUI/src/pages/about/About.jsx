import React from "react";
import { BiBook, BiEnvelope, BiUser, BiWorld } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-10">
      <div className="h-80 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
      <div className="h-80 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
      <div className="h-80 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow h-">
        <div className="flex flex-col items-center pb-10">
          <BiUser className="w-24 h-24 my-3" />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Daniel Alfredo Hernández Carrasco
          </h5>
          <span className="text-sm text-gray-500">
            Desarrollador, Aportador - Turet 2.0
          </span>

          <div className="flex mt-4 md:mt-6">
            <a
              href="https://rinacional.tecnm.mx/jspui/handle/TecNM/1583"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-center gap-2"
            >
              Tesis <BiBook />
            </a>
          </div>
        </div>
      </div>
      <div className="h-80 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 my-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D5603AQEhRP206JW6Rw/profile-displayphoto-shrink_800_800/0/1685569094629?e=1721865600&v=beta&t=HXU8qFlL5eFPx9w8bVAvxC5F0OOeCNcbzKigsqAxnLA"
            alt="Perfil Maximiliano Ponce Marquez"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Jesús Carlos Cárdenas Piñuelas
          </h5>
          <span className="text-sm text-gray-500">
            Desarrollador, Aportador - Turet 1.0
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="https://www.linkedin.com/in/jccp33/"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-center gap-2"
            >
              LinkedIn <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="h-80 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 my-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/C4E03AQGq8CWToMoZBg/profile-displayphoto-shrink_400_400/0/1517865654438?e=1721865600&v=beta&t=DFOhcw9dgiD4EhQ8emgaa9eRYnV_yL5ZYqwBrY7D-A4"
            alt="Perfil Maximiliano Ponce Marquez"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Erwing Alexander Vilegas Tun
          </h5>
          <span className="text-sm text-gray-500">
            Desarrollador, Aportador - Turet 1.0
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="https://www.linkedin.com/in/erwin-alexander-villegas-tun-04a347148/"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-center gap-2"
            >
              LinkedIn <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
