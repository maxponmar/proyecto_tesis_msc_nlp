import { NavLink } from 'react-router-dom';

function SidebarLink({ title, link, href, onClick, icon }) {
  let sidebarItem = <></>;
  if (link)
    sidebarItem = (
      <NavLink
        to={link ? link : '/'}
        className="w-full h-12 justify-end py-5 my-1 ease-in-out duration-300 flex items-center hover:bg-itn cursor-pointer font-bold text-xl text-right"
        onClick={onClick}
      >
        {({ isActive }) => (
          <>
            {title}
            <div
              className={`mr-2.5 ml-5 min-w-[40px] min-h-[40px] bg-black flex items-center justify-center rounded ${
                isActive && link != '/' && 'bg-itn text-white'
              }`}
            >
              {icon}
            </div>
          </>
        )}
      </NavLink>
    );
  if (href)
    sidebarItem = (
      <a
        href={href}
        target="_blank"
        className="w-full h-12 justify-end py-5 my-1 ease-in-out duration-300 flex items-center hover:bg-itn  cursor-pointer font-bold text-xl text-right"
        onClick={onClick}
      >
        {title}
        <div className="mr-2.5 ml-5 min-w-[40px] min-h-[40px] bg-black flex items-center justify-center rounded">
          {icon}
        </div>
      </a>
    );
  return sidebarItem;
}

export default SidebarLink;
