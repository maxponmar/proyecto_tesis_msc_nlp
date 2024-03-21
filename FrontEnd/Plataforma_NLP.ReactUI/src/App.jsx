import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import config from "./config/config.json";
import ProtectedRoute from "./route/ProtectedRoute";
import routes from "./route/Routes";
function App() {
  document.title = config.appTitle;

  return (
    <>
      <div className="min-h-screen bg-stone-200">
        <Header />
        <Sidebar />
        <div className="top-[60px] left-0 sm:left-[60px] absolute w-[100vw] sm:w-[calc(100vw-60px)] overflow-auto max-h-[calc(100vh-60px)]">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute
                    isProtected={route.isProtected}
                    allowedRoles={route.allowedRoles}
                    element={<route.component />}
                  />
                }
              />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
