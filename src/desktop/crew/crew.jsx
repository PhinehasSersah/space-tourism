import { React, useState, useEffect } from "react";

import Header from "../hearder";
import ansari from "./image-anousheh-ansari.png";
import background from "./background-crew-desktop.jpg";
import douglas from "./image-douglas-hurley.png";
import mark from "./image-mark-shuttleworth.png";
import victor from "./image-victor-glover.png";

const Crew = () => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [renderId, setRenderId] = useState(0);

  const images = [douglas, mark, victor, ansari];

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
    let target = event.target;
    let parent = target.parentNode;
    let index = Array.prototype.indexOf.call(parent.children, target);
    setRenderId(index);
    target.style.backgroundColor = "white";
    let siblings = [...parent.children].filter((child) => child !== target);
    siblings.forEach(
      (child) => (child.style.backgroundColor = "rgba(255, 255, 255, 0.5)")
    );
  };
  return (
    <>
      <div
        className="flex flex-col w-screen h-mob sm:h-tab lg:h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <div className="flex flex-col sm:flex-col-reverse lg:flex-row-reverse justify-evenly ">
          <div className="flex flex-col  mx-auto lg:mx-0 w-96 h-80 lg:h-2/3 lg:w-1/3 mt-60 sm:mt-16 lg:mt-24 border-b-2  border-faded sm:border-none">
            <img
              className="w-96 h-80 sm:w-w-tab sm:h-h-tab lg:h-4/5 lg:w-4/5 object-contain transition-opacity block mx-auto"
              src={images[renderId]}
              alt="crew pictures"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-col items-center justify-center lg:block lg:w-5/12 mt-24 lg:ml-16">
            <div className="w-fit mx-auto mt-9 sm:mt-20 lg:mt-0">
              <h1 className="absolute top-28 sm:left-10 left-40 leading-5 text-base sm:text-xl sm:block lg:text-2xl w-56 sm:w-64 sm:text-left font-barC mt-16 text-white uppercase tracking-widest lg:tracking-wider text-center mr-56 ">
                {" "}
                <span className="text-faded mr-3  font-bold">02</span>meet your
                crew
              </h1>

              <h2 className="font-bel text-base sm:text-2xl lg:text-4xl text-faded mt-16  text-center lg:text-left lg:tracking-widest tracking-wider uppercase w-56 sm:w-72  mx-auto ">
                {isFetched ? data.crew[renderId].role : null}
              </h2>
              <h1 className="font-bel text-2xl sm:text-4xl lg:text-5xl text-white mt-10 sm:mt-5 lg:mt-6 text-center lg:text-left lg:tracking-widest uppercase mx-auto">
                {isFetched ? data.crew[renderId].name : null}
              </h1>
              <p className="text-white mt-16 sm:mt-7 lg:mt-10 w-96 h-48 font-bar text-left text-base leading-6 lg:text-xl">
                {isFetched ? data.crew[renderId].bio : null}
              </p>
            </div>
            <div className="lg:h-12 w-40 lg:w-56 flex justify-evenly align-middle -mt-12 sm:-mt-16 lg:mt-16 mx-auto lg:mx-0">
              <div
                onClick={changeRenderId}
                className="lg:w-5 w-4 h-4 lg:h-5 mx-2 bg-white rounded-full cursor-pointer"
              ></div>
              <div
                onClick={changeRenderId}
                className="lg:w-5 w-4 h-4 lg:h-5 mx-2 bg-faded rounded-full cursor-pointer"
              ></div>
              <div
                onClick={changeRenderId}
                className="lg:w-5 w-4 h-4 lg:h-5 mx-2 bg-faded rounded-full cursor-pointer"
              ></div>
              <div
                onClick={changeRenderId}
                className="lg:w-5 w-4 h-4 lg:h-5 mx-2 bg-faded rounded-full cursor-pointer"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
