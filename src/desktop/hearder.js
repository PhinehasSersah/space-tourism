import React from "react";
import logo from '../assets/shared/logo.svg'

const Header = () => {
  return (
    <header className="w-screen h-32 flex bg-blend-screen mt-8">
      <div className="w-12 h-12 bg-white rounded ml-8">
        <img alt="header logo" src={logo} />
      </div>
      <div className="w-96 bg-white h-px ml-8"></div>
      <nav className="bg-backg backdrop-opacity-10">
        <ul className="flex justify-around">
          <li className="mx-12">
            <a className="font-barC" href="">
              00 HOME
            </a>
          </li>
          <li className="mx-12">
            <a className="font-barC" href="">
              01 DESTINATION
            </a>
          </li>
          <li className="mx-12">
            <a className="font-barC" href="">
              02 CREW{" "}
            </a>
          </li>
          <li className="mx-12">
            <a className="font-barC" href="">
              03 TECHNOLOGY{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
