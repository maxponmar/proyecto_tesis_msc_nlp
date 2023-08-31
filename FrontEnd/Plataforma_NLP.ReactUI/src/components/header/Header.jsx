import { Link } from 'react-router-dom';
import ItnLogo from '../../assets/images/tecnm_itn.jpg';
import config from '../../config/config.json';

import { useAuth0 } from '@auth0/auth0-react';
import Tooltip from '../tooltip/Tooltip';

function Header() {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <header className="border-b border-black z-[1000] top-0 left-[60px] fixed w-full bg-white font-bold text-black text-center text-xl py-1 flex justify-between items-center h-[60px]">
      <div className="px-5 w-full sm:w-[200px]  flex items-center justify-center">
        <img className="translate-x-[-60px] sm:translate-x-0" src={ItnLogo} alt="Continental Logo" />
      </div>
      <div className="w-full text-left px-10 hidden sm:block">
        <Link to="/">{config.appHeader}</Link>
        {isAuthenticated ? (
          <div className="absolute top-0 right-10 mx-10 my-1 flex items-center justify-center">
            <p className="text-itn mr-1">{user.name}</p>
            <Tooltip tooltipText="Cerrar Sesión">
              <button
                className="h-9 w-9 bg-stone-900 rounded-full hover:shadow-inner focus:outline-none transition duration-100 ease-in-out transform hover:-translate-x hover:scale-105 active:translate-y-1 flex items-center justify-center"
                onClick={() => {
                  logout();
                }}
              >
                <img src={user.picture} className="h-8 w-8" />
              </button>
            </Tooltip>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
