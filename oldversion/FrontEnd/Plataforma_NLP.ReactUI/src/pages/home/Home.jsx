import { Link } from "react-router-dom";
import retmeepro from "../../assets/images/retmeepro.png";
import { useAuth } from "../../context/AuthContext";
import Login from "../login/Login";
function Home() {
  const { user } = useAuth();

  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center py-10 px-5 h-full">
      {!user ? (
        <Login />
      ) : (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            <span className="font-bold block">
              {user ? `Bienvenid@ ${user?.name}` : "Bienvenid@"}
            </span>
          </h2>
          <p className="text-xl font-bold">
            Abra el menú de la izquiera para ver más opciones
          </p>
          <img
            src={retmeepro}
            alt="RetmeePro - Mejorando el Texto"
            className="max-w-xs sm:max-w-md my-10"
          />
          <Link
            to="/termsandconditions"
            className="bg-itn text-white font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl"
          >
            Consulta términos y condiciones
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
