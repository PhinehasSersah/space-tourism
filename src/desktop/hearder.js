import React from "react";
import logo from '../assets/shared/logo.svg'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  return (
    <header className="w-screen h-12 absolute flex items-center bg-blend-screen mt-8">
      <div className="w-12 h-12 bg-white rounded-full ml-8">
        <img alt="header logo" src={logo} />
      </div>
      <div className="w-96 bg-white h-px ml-8 z-auto"></div>
      <nav className="bg-backg backdrop-opacity-10 h-16 w-8/12 items-center ">
        <ul className="flex justify-evenly align-middle mt-4 items-center">
          <li className={`ml-12 items-center pb-5  ${window.location.pathname === '/' ? 'border-b-2 border-white' : ''} `} >
            <NavLink to={'/'} className="font-barC h-6 text-white">
              00 HOME
            </NavLink>
          </li>
          <li className={`mx-1 pb-5 ${window.location.pathname === '/destination' ? 'border-b-2 border-white' : ''}`}>
            <NavLink to={'/destination'} className="font-barC text-white">
              01 DESTINATION
            </NavLink>
          </li>
          <li className={`mx-1 pb-5  ${window.location.pathname === '/crew' ? 'border-b-2 border-white' : ''}`} >
            <NavLink to={"/crew"} className="font-barC text-white">
              02 CREW{" "}
            </NavLink>
          </li>
          <li className={`mr-12 pb-5 ${window.location.pathname === '/technology' ? 'border-b-2 border-white' : ''} `}>
            <NavLink to={'/technology'} className="font-barC text-white">
              03 TECHNOLOGY{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
