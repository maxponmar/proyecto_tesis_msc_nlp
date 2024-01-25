import { Auth0Provider } from '@auth0/auth0-react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { defaultApi } from './api/defaultApi';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ApiProvider api={defaultApi}>
        <HashRouter>
          <App />
        </HashRouter>
      </ApiProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
