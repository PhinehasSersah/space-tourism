import { React, useState, useEffect } from "react";
import Header from "../hearder";
import moon from "./image-moon.png";
import background from "./background-destination-desktop.jpg";
import titan from "./image-titan.png";
import mars from "./image-mars.png";
import europa from "./image-europa.png";

const Destination = () => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [renderId, setRenderId] = useState(0);

  const images = [moon, mars, europa, titan];
  const titles = ["moon", "mars", "europa", "titan"];

  const fetchData = async () => {
    await fetch("data.json").then((response) =>
      response.json().then((info) => {
        setData(info);
        setIsFetched(true);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [isFetched]);

  // function to get index of moon, mars, europa, titan
  const changeRenderId = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, target);
    setRenderId(index);
    target.style.borderBottom = "2px solid white";
    const siblings = [...parent.children].filter((child) => child !== target);
    siblings.forEach((child) => (child.style.borderBottom = "none"));
  };

  return (
    <>
      <div
        className="flex flex-col w-screen h-mob sm:h-tab lg:h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <div className="flex flex-col lg:justify-evenly lg:flex-row ">
          <div className="flex flex-col lg:w-1/3 lg:mt-36 mt-40 h-40 ">
            <h1 className="lg:text-2xl sm:text-xl sm:text-left sm:ml-12 lg:ml-0 lg:text-center font-barC text-white lg:mb-20 uppercase tracking-widest lg:tracking-wider lg:mr-56 ">
              {" "}
              <span className="text-faded mr-3 font-bold">01</span> pick your
              destination
            </h1>
            <img
              className="mt-8 lg:mt-0 w-44 h-44 sm:w-72 sm:h-72 lg:w-96 lg:h-96 block mx-auto "
              src={images[renderId]}
              alt="gallaxy pictures"
            />
          </div>

          <div className="lg:w-1/3 lg:mt-36 lg:h-4/5 ">
            <nav className=" mt-24 sm:mt-56 lg:mt-0 h-7 lg:h-10  mx-auto">
              <ul className="flex h-full w-80 lg:w-96 mx-auto  lg:mt-16">
                {titles &&
                  titles.map((title, index) => (
                    <li
                      onClick={changeRenderId}
                      className={`${
                        index === 0 ? "border-b-2 border-white " : ""
                      }text-white cursor-pointer  uppercase px-3 lg:mx-0 lg:mr-9  font-bel`}
                      key={index}
                    >
                      {title}
                    </li>
                  ))}
              </ul>
            </nav>
            <h1 className="font-bel text-6xl lg:text-8xl text-white mt-10 lg:mt-12 lg:tracking-widest uppercase ">
              {isFetched ? data.destinations[renderId].name : null}
            </h1>
            <p className="text-lightblue mt-12 w-96 font-bar text-base lg:text-xl text-left mx-auto">
              {isFetched ? data.destinations[renderId].description : null}
            </p>
            <div className="h-24 w-96 flex flex-col items-center sm:flex-row justify-center sm:justify-evenly lg:justify-start mt-12 border-t-2 mx-auto border-hr">
              <div className="flex flex-col mt-32 sm:mt-6 lg:mt-6">
                <p className="text-white uppercase text-sm font-bel lg:text-left">
                  avg. distance
                </p>
                <p className="text-white text-3xl font-bel uppercase mt-4 lg:mt-0 lg:text-left">
                  {isFetched ? data.destinations[renderId].distance : null}
                </p>
              </div>
              <div className="flex flex-col lg:ml-16 mt-6">
                <p className="text-white uppercase text-sm font-bel">
                  est. travel time
                </p>
                <p className="text-white text-3xl font-bel uppercase mt-4 lg:mt-0 lg:text-left">
                  {isFetched ? data.destinations[renderId].travel : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
