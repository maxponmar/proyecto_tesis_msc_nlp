import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { BiHelpCircle, BiLogIn, BiLogOut, BiSupport } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import ItnLogo from '../../assets/images/itn.ico';
import routes from '../../route/Routes';
import SidebarLink from '../../route/SidebarLink';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      {!showSidebar && (
        <div
          className={`border-b border-black flex items-center justify-center absolute bg-white cursor-pointer z-[1400] ease-in-out duration-300 w-[60px] h-[60px] sm:hidden`}
          onClick={() => setShowSidebar((oldState) => !oldState)}
          onMouseEnter={() => setShowSidebar((oldState) => !oldState)}
        >
          <FaBars />
        </div>
      )}
      <div className={`absolute flex h-[100vh] ${showSidebar ? 'w-full' : 'w-0'}`}>
        <div
          className={`text-white pb-5 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-md border border-black bg-sidebarcolor/[0.9] w-[250px] z-[1500] ease-in-out duration-300 ${
            showSidebar ? 'translate-x-0 ' : 'sm:-translate-x-[calc(100%-60px)] -translate-x-full'
          }`}
          onMouseEnter={() => setShowSidebar(true)}
          onMouseLeave={() => setShowSidebar(false)}
        >
          <div className="bg-black h-[64px] flex items-center justify-center">
            {showSidebar && <img className="h-[55px] " src={ItnLogo} alt="Continental Logo" />}
          </div>
          <div className="flex flex-col justify-between	h-full">
            <div>
              {routes
                .filter((r) => r.showOnSidebar)
                .map((route, index) => {
                  if (
                    !route.isProtected ||
                    (isAuthenticated && route.isProtected && route.allowedRoles?.includes('ALL')) ||
                    (route.isProtected && route.allowedRoles.some((role) => user?.name.includes(role)))
                  )
                    return (
                      <SidebarLink
                        key={index}
                        title={route.title}
                        link={route.path}
                        icon={<route.icon />}
                        onClick={() => setShowSidebar(false)}
                      />
                    );
                })}
            </div>
            <div>
              {isAuthenticated ? (
                <SidebarLink title="Logout" link="/" icon={<BiLogOut />} onClick={() => auth.logout()} />
              ) : (
                <SidebarLink title="Login" link="/login" icon={<BiLogIn />} onClick={() => setShowSidebar(false)} />
              )}
              <SidebarLink title="Guía" link="/guide" icon={<BiHelpCircle />} onClick={() => setShowSidebar(false)} />
              <SidebarLink title="Soporte" link="/support" icon={<BiSupport />} onClick={() => setShowSidebar(false)} />
            </div>
          </div>
        </div>
        {showSidebar && (
          <div className={`h-full bg-transparent  w-[calc(100%-200px)]`} onClick={() => setShowSidebar(false)}></div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
