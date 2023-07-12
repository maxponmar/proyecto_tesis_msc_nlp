import server from '@/config/config.json';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthenticationModel } from '../models/Authentication/AuthenticationModel';
import { User } from '../models/Authentication/User';

export const AuthContext = React.createContext(new AuthenticationModel());

function AuthContextProvider(props) {
  // Se valida si ya hay token almacenado en local storage
  let session = null;
  try {
    session = JSON.parse(window.localStorage.getItem('session'));
    if (session) {
      // La API regresa un token que expira en 1 dia, por lo que se valida
      // que el token guardado no este expirado
      if (dayjs(session.created).add(0.9, 'day').isBefore(dayjs())) {
        session = null;
      }
    }
  } catch (error) {}

  const [user, setUser] = useState(new User());

  const login = async (username, password) => {
    const credentials = {
      userName: username,
      password: password,
    };
    toast.promise(
      fetch(`${server.apiurl}/Login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      }),
      {
        loading: 'Iniciando sesión...',
        success: (data) => {
          if (!data.ok) throw new Error('Usuario o contraseña incorrecto.');
          if (data === 'User not found') throw new Error('Este usuario no existe.');
          if (data === 'Invalid username or password') throw new Error('Usuario o contraseña incorrecto.');
          if (data === undefined) throw new Error('Error del servidor');
          data.json().then((loginResponse) => {
            setUser(loginResponse);
            // Se guarda informacion de token y usuario en el localstorage
            window.localStorage.setItem(
              'session',
              JSON.stringify({
                user: loginResponse,
                // Se guarda informacion de cuando se guardo el token
                created: new Date(),
              }),
            );
          });
          return `Bienvenid@`;
        },
        error: (err) => {
          setUser({
            username: '',
            password: '',
            token: null,
            name: '',
            email: '',
            role: '',
          });
          return err.message;
        },
      },
    );
  };

  const loginWindows = async (username, password) => {
    const credentials = {
      userName: username,
      password: password,
    };
    toast.promise(
      fetch(`${server.apiurl}/LoginWindows`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      }),
      {
        loading: 'Iniciando sesión...',
        success: (data) => {
          if (!data.ok) throw new Error('Usuario o contraseña incorrecto.');
          if (data === 'User not found') throw new Error('Este usuario no existe.');
          if (data === 'Invalid username or password') throw new Error('Usuario o contraseña incorrecto.');
          if (data === undefined) throw new Error('Error del servidor');
          data.json().then((loginResponse) => {
            setUser(loginResponse);
            // Se guarda informacion de token y usuario en el localstorage
            window.localStorage.setItem(
              'session',
              JSON.stringify({
                user: loginResponse,
                // Se guarda informacion de cuando se guardo el token
                created: new Date(),
              }),
            );
          });
          return `Bienvenid@`;
        },
        error: (err) => {
          setUser({
            username: '',
            password: '',
            token: null,
            name: '',
            email: '',
            role: '',
          });
          return err.message;
        },
      },
    );
  };

  const logout = () => {
    toast.loading('Cerrando sesión');
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  const values = new AuthenticationModel(!!user.token, login, loginWindows, logout, user);

  return <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>;
}

export default AuthContextProvider;
