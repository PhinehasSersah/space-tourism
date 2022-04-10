import React from "react";
import logo from '../assets/shared/logo.svg'
import { Link } from "react-router-dom";

const Header = () => {

  const handleHover = (e) => {
    let target = e.target;
    let parent = target.parentNode;
    let gparent = parent.parentNode;
    let siblings = [...gparent.children].filter(child => child !== parent);
    parent.style.borderBottom = "2px solid #fff";
    siblings.forEach(sibling => {
      return sibling.style.borderBottom = "none";
    })
  }
  return (
    <header className="w-screen h-12 absolute flex items-center bg-blend-screen mt-8">
      <div className="w-12 h-12 bg-white rounded-full ml-8">
        <img alt="header logo" src={logo} />
      </div>
      <div className="w-96 bg-white h-px ml-8 z-auto"></div>
      <nav className="bg-backg backdrop-opacity-10 h-16 w-8/12 items-center ">
        <ul className="flex justify-evenly align-middle mt-4 items-center">
          <li className="ml-12 items-center pb-5 border-b-2 border-white" >
            <Link onClick={handleHover}  to={'/'} className="font-barC h-6 text-white">
              00 HOME 
            </Link>
          </li>
          <li  className="mx-1 pb-5 ">
            <Link onClick={handleHover} to={'/destination'} className="font-barC text-white" href="">
              01 DESTINATION
            </Link>
          </li>
          <li  className="mx-1 pb-5 ">
            <Link onClick={handleHover} to={"/crew"} className="font-barC text-white" href="">
              02 CREW{" "}
            </Link>
          </li>
          <li className="mr-12 pb-5 ">
            <Link onClick={handleHover} to={'/technology'} className="font-barC text-white" href="">
              03 TECHNOLOGY{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
