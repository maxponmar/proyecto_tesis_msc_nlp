import { useContext, useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ItnLogo from '../../assets/images/tecnm_itn.jpg';
import config from '../../config/config.json';
import { AuthContext } from '../../redux/AuthContext';

import Tooltip from '../tooltip/Tooltip';

function Header() {
  const [userName, setUserName] = useState('');
  const AuthCtx = useContext(AuthContext);
  const maxCharsUsername = 17;

  useEffect(() => {
    let usernameParts = AuthCtx.user.name?.split(' ');
    if (!usernameParts) return;
    let importantUsernamePart =
      usernameParts.length >= 2 ? usernameParts[0].concat(' ', usernameParts[1]) : usernameParts[0];
    setUserName(
      importantUsernamePart.length > maxCharsUsername
        ? `${importantUsernamePart.slice(0, maxCharsUsername)}`
        : importantUsernamePart,
    );
  }, [AuthCtx.user]);

  return (
    <header className="border-b border-black z-[1000] top-0 left-[60px] fixed w-full bg-white font-bold text-black text-center text-xl py-1 flex justify-between items-center h-[60px]">
      <div className="px-5 w-full sm:w-[200px]  flex items-center justify-center">
        <img className="translate-x-[-60px] sm:translate-x-0" src={ItnLogo} alt="Continental Logo" />
      </div>
      <div className="w-full text-left px-10 hidden sm:block">
        <Link to="/">{config.appHeader}</Link>
        {AuthCtx.isAuthenticated && (
          <div className="absolute top-0 right-10 mx-10 my-1 flex items-center justify-center">
            <p className="text-itn mr-1">{userName}</p>
            <p className="mr-1 text-black">{AuthCtx.user.roles[0]} USER</p>
            <Tooltip tooltipText="Cerrar Sesión">
              <button
                className="text-black text-lg font-bold bg-stone-900 px-2 rounded-full hover:shadow-inner focus:outline-none transition duration-100 ease-in-out transform hover:-translate-x hover:scale-105 active:translate-y-1 h-[35px]"
                onClick={() => {
                  AuthCtx.logout();
                }}
              >
                <FaUserAlt className="text-white" />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
