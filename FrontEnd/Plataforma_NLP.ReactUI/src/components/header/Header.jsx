import { Link } from "react-router-dom";
import config from "../../config/config.json";

import { useAuth0 } from "@auth0/auth0-react";
import Tooltip from "../tooltip/Tooltip";

function Header() {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <header className=" z-[1000] top-0 left-[60px] fixed w-full bg-white font-bold text-black text-center text-xl py-1 flex justify-between items-center h-[60px]">
      <Link
        to="/"
        className="translate-x-[-60px] sm:translate-x-0 px-5 flex items-center justify-center min-w-[380px] text-sm md:min-w-[400px] md:text-lg"
      >
        <img className="w-8 h-8" src="/retmeepro.svg" alt="Continental Logo" />
        <p className="ml-1">{config.appHeader}</p>
      </Link>
      <div className="w-full text-left px-10 hidden sm:block">
        {isAuthenticated ? (
          <div className="absolute top-0 right-10 mx-10 my-1 flex items-center justify-center">
            <p className="text-itn mr-1">{user.name}</p>
            <Tooltip tooltipText="Cerrar Sesión">
              <button
                className="h-9 w-9 rounded-full hover:shadow-inner focus:outline-none transition duration-100 ease-in-out transform hover:-translate-x hover:scale-105 active:translate-y-1 flex items-center justify-center"
                onClick={() => {
                  logout();
                }}
              >
                <img src={user.picture} className="h-9 w-9 rounded-full" />
              </button>
            </Tooltip>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
