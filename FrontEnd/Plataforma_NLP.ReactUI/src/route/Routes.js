import { AiFillHome } from 'react-icons/ai';
import { BiLogIn, BiLogOut, BiPencil, BiSupport } from 'react-icons/bi';
import 'react-quill/dist/quill.snow.css';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Unauthorized from '../pages/noauthorized/Unauthorized';
import SimpleEditor from '../pages/simpletexteditor/SimpleEditor';
import Tests from '../pages/simpletexteditor/Tests';
import PdfGuide from '../pages/support/PdfGuide';
import Support from '../pages/support/Support';

const routes = [
  {
    path: '/',
    component: Home,
    isProtected: false,
    icon: AiFillHome,
    title: 'Inicio',
    allowedRoles: ['ALL'],
    showOnSidebar: true,
  },
  {
    path: '/texteditor',
    component: SimpleEditor,
    isProtected: false,
    icon: BiPencil,
    title: 'Editor',
    allowedRoles: ['ALL'],
    showOnSidebar: true,
  },
  {
    path: '/tests',
    component: Tests,
    isProtected: false,
    icon: BiPencil,
    title: 'Tests',
    allowedRoles: ['ALL'],
    showOnSidebar: true,
  },
  {
    path: '/simpleeditor',
    component: SimpleEditor,
    isProtected: false,
    icon: BiPencil,
    title: 'Simple Editor',
    allowedRoles: ['ALL'],
    showOnSidebar: true,
  },
  {
    path: '/login',
    component: Login,
    isProtected: false,
    icon: BiLogIn,
    title: 'Login',
    allowedRoles: ['ALL'],
    showOnSidebar: false,
  },
  {
    path: '/guide',
    component: PdfGuide,
    isProtected: false,
    icon: BiLogOut,
    title: 'Guía',
    allowedRoles: ['ALL'],
    showOnSidebar: false,
  },
  {
    path: '/support',
    component: Support,
    isProtected: false,
    icon: BiSupport,
    title: 'Soporte',
    allowedRoles: ['ALL'],
    showOnSidebar: false,
  },
  {
    path: '/unauthorized',
    component: Unauthorized,
    isProtected: false,
    allowedRoles: ['ALL'],
    showOnSidebar: false,
  },
];

export default routes;
