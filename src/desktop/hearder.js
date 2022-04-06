import React from "react";
import logo from '../assets/shared/logo.svg'

const Header = () => {
  return (
    <header className="w-screen h-12 absolute flex items-center bg-blend-screen mt-8">
      <div className="w-12 h-12 bg-white rounded-full ml-8">
        <img alt="header logo" src={logo} />
      </div>
      <div className="w-96 bg-white h-px ml-8 z-auto"></div>
      <nav className="bg-backg backdrop-opacity-10 h-16 w-8/12 items-center ">
        <ul className="flex justify-around align-middle mt-4 items-center">
          <li className="mx-12 items-center" >
            <a className="font-barC h-6 text-white " href="">
              00 HOME
            </a>
          </li>
          <li className="mx-12">
            <a className="font-barC text-white" href="">
              01 DESTINATION
            </a>
          </li>
          <li className="mx-12">
            <a className="font-barC text-white" href="">
              02 CREW{" "}
            </a>
          </li>
          <li className="mx-12">
            <a className="font-barC text-white" href="">
              03 TECHNOLOGY{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
