import { React, useState } from "react";
import logo from '../assets/shared/logo.svg'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const title = ['00  HOME', '01  DESTINATION', '02  CREW', 'O3  TECHNOLOGY'];
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(prev => !prev);
  }
  return (
    <header className="w-screen flex
     justify-between bg-blend-screen py-4 px-8">
      <div className="w-12 h-12 bg-white rounded-full border-2">
        <img alt="header logo" src={logo} />
      </div>
      <div className=" hidden lg:inline-block w-3/12 absolute left-36 top-11 bg-white opacity-25 h-px ml-8 z-auto"></div>
      
      <div className=" w-64  bg-faded h-screen absolute right-0 top-3 backdrop-filter backdrop-blur-2xl">
      {title.map((element, index) => {
            return <NavLink key={index} to={`${index === 0 ? '/' : index === 1 ? '/destination' : index === 2 ? '/crew' : '/technology'}`} className={({ isActive }) => isActive ? 'border-b-2 pb-4 sm:pb-11 border-white font-barC h-6 text-white' : 'pb-4 mt-2 sm:pb-11 font-barC h-6 text-white'}>
              {element}
            </NavLink>
          })}
      </div>
      <nav className=" sm:bg-backg backdrop-opacity-10 w-8/12 relative flex justify-end">
        <button onClick={handleToggle} className="sm:hidden  text-white">
          <GiHamburgerMenu size={40} />
        </button>

        <ul className={` w-28 sm:w-full float-right sm:left-0 sm:top-0 sm:flex sm:justify-evenly align-middle mt-2 items-center flex-wrap ${active ? 'flex' : 'hidden'}`}>
          {title.map((element, index) => {
            return <NavLink key={index} to={`${index === 0 ? '/' : index === 1 ? '/destination' : index === 2 ? '/crew' : '/technology'}`} className={({ isActive }) => isActive ? 'border-b-2 pb-4 sm:pb-11 border-white font-barC h-6 text-white' : 'pb-4 mt-2 sm:pb-11 font-barC h-6 text-white'}>
              {element}
            </NavLink>
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;


