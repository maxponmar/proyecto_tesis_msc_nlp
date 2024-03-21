import { Link } from "react-router-dom";
import config from "../../config/config.json";

import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logoutUser } = useAuth();

  return (
    <header className=" z-[1000] top-0 left-[60px] fixed w-[calc(100vw-61px)] bg-white font-bold text-black text-center text-xl py-1 flex justify-between items-center h-[60px]">
      <Link
        to="/"
        className="translate-x-[-60px] sm:translate-x-0 px-5 flex items-center justify-center min-w-[380px] text-sm md:min-w-[400px] md:text-lg"
      >
        <img className="w-8 h-8" src="/retmeepro.svg" alt="Continental Logo" />
        <p className="ml-1">{config.appHeader}</p>
      </Link>
      {user ? (
        <div className="flex items-center justify-center">
          <button
            type="button"
            class="focus:outline-none text-black  hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center justify-center gap-2 mr-2"
            onClick={logoutUser}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <p>Cerrar Sesión</p>
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
