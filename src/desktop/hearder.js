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
    <header className="w-screen h-12 absolute flex items-center bg-blend-screen mt-8">
      <div className="w-12 h-12 bg-white rounded-full ml-8">
        <img alt="header logo" src={logo} />
      </div>
      <div className=" hidden md:inline-block w-96 bg-white h-px ml-8 z-auto"></div>
      <nav className="bg-transparent sm:bg-backg backdrop-opacity-10 h-16 w-8/12 items-center relative">
        <button onClick={handleToggle} className="flex float-right mt-5 sm:hidden  text-white">
          <GiHamburgerMenu size={30} />
        </button>

        <ul className={`${active ? 'hidden' : ''}  w-28 sm:w-full float-right sm:left-0 top-10 sm:top-0 flex sm:justify-evenly align-middle mt-4 items-center flex-wrap `}>
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


