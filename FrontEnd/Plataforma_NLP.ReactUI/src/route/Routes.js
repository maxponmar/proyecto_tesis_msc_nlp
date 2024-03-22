import { AiFillHome } from "react-icons/ai";
import {
  BiBookBookmark,
  BiLogIn,
  BiLogOut,
  BiPencil,
  BiSupport,
} from "react-icons/bi";
import "react-quill/dist/quill.snow.css";
import FreelingApplication from "../pages/freeling/Freeling";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Unauthorized from "../pages/noauthorized/Unauthorized";
import Register from "../pages/register/Register";
import SimpleEditor from "../pages/simpletexteditor/SimpleEditor";
import PdfGuide from "../pages/support/PdfGuide";
import Support from "../pages/support/Support";
import Terms from "../pages/terms/Terms";

const routes = [
  {
    path: "/",
    component: Home,
    isProtected: false,
    icon: AiFillHome,
    title: "Inicio",
    allowedRoles: ["ALL"],
    showOnSidebar: true,
  },
  {
    path: "/riquezalexica",
    component: SimpleEditor,
    isProtected: true,
    icon: BiPencil,
    title: "Riqueza Lexica",
    allowedRoles: ["ALL"],
    showOnSidebar: true,
  },
  {
    path: "/freeling",
    component: FreelingApplication,
    isProtected: false,
    icon: BiBookBookmark,
    title: "FreeLing",
    allowedRoles: ["ALL"],
    showOnSidebar: true,
  },
  {
    path: "/login",
    component: Login,
    isProtected: false,
    icon: BiLogIn,
    title: "Login",
    allowedRoles: ["ALL"],
    showOnSidebar: false,
  },
  {
    path: "/register",
    component: Register,
    isProtected: false,
    icon: BiLogIn,
    title: "Registro",
    allowedRoles: ["ALL"],
    showOnSidebar: false,
  },
  {
    path: "/termsandconditions",
    component: Terms,
    isProtected: false,
    icon: BiLogIn,
    title: "Términos y Condiciones",
    allowedRoles: ["ALL"],
    showOnSidebar: false,
  },
  {
    path: "/guide",
    component: PdfGuide,
    isProtected: false,
    icon: BiLogOut,
    title: "Guía",
    allowedRoles: ["ALL"],
    showOnSidebar: false,
  },
  {
    path: "/support",
    component: Support,
    isProtected: false,
    icon: BiSupport,
    title: "Soporte",
    allowedRoles: ["ALL"],
    showOnSidebar: false,
  },
  {
    path: "/unauthorized",
    component: Unauthorized,
    isProtected: false,
    allowedRoles: ["ALL"],
    showOnSidebar: false,
  },
];

export default routes;
