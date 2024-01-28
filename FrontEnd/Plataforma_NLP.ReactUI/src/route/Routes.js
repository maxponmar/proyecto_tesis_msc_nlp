import { AiFillHome } from 'react-icons/ai';
import { BiBookBookmark, BiLogIn, BiLogOut, BiPencil, BiSupport, BiTestTube } from 'react-icons/bi';
import 'react-quill/dist/quill.snow.css';
import FreelingApplication from '../pages/freeling/Freeling';
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
    path: '/simpleeditor',
    component: SimpleEditor,
    isProtected: false,
    icon: BiPencil,
    title: 'Text Editor',
    allowedRoles: ['ALL'],
    showOnSidebar: true,
  },
  {
    path: '/freeling',
    component: FreelingApplication,
    isProtected: false,
    icon: BiBookBookmark,
    title: 'FreeLing',
    allowedRoles: ['ALL'],
    showOnSidebar: true,
  },
  {
    path: '/tests',
    component: Tests,
    isProtected: false,
    icon: BiTestTube,
    title: 'Tests',
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
