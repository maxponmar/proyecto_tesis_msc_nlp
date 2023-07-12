import { useContext, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import ItnLogo from '../../assets/images/tecnm_itn.jpg';
import { AuthContext } from '../../redux/AuthContext';

function Login() {
  const AuthCtx = useContext(AuthContext);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = () => {
    AuthCtx.login(usernameInputRef.current.value, passwordInputRef.current.value);
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') loginHandler();
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-[calc(100vh-65px)]">
      {AuthCtx.isAuthenticated ? <Navigate to="/" /> : null}

      <div className="relative sm:max-w-sm max-w-[300px]">
        <div className="bg-stone-900 shadow-lg w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="bg-itn shadow-lg w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 shadow-md bg-white ">
          <div className=" items-center justify-center flex-col py-10 ">
            <img
              className="top-0 left-0 w-full h-full object-scale-down"
              src={ItnLogo}
              alt="Intituto Tecnologico de Nogales"
            />
          </div>
          <label className="block mt-3 text-sm text-center text-black font-bold">Iniciar Sesion</label>
          <div className="mt-10">
            <div>
              <input
                type="text"
                placeholder="Usuario"
                ref={usernameInputRef}
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-4"
                onKeyDown={keyPressHandler}
              />
            </div>

            <div className="mt-7">
              <input
                type="password"
                placeholder="Contraseña"
                ref={passwordInputRef}
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-4"
                onKeyDown={keyPressHandler}
              />
            </div>

            <div className="mt-7">
              <button
                onClick={(e) => loginHandler()}
                className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
