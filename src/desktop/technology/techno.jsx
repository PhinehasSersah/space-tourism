import { React, useState, useEffect } from "react";
import Header from "../hearder";
import background from "./background-technology-desktop.jpg";
import launch from "./image-launch-vehicle-portrait.jpg";
import capsule from "./image-space-capsule-portrait.jpg";
import space from "./image-spaceport-portrait.jpg";

const Technology = () => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [renderId, setRenderId] = useState(0);

  const images = [launch, space, capsule];

  const fetchData = async () => {
    await fetch("data.json").then((response) =>
      response.json().then((data) => {
        setData(data);
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
  };
  return (
    <>
      <div
        className="flex flex-col w-screen h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <div className="flex flex-col">
          <h1 className="text-2xl w-72 ml-56 mt-44 text-left font-barC text-white  uppercase tracking-widest">
            {" "}
            <span className="text-faded mr-3 font-bold">03</span> space launch
            101
          </h1>
          <div className="flex  flex-row-reverse justify-between relative ">
            <div className="flex flex-col h-5/6 w-1/3">
              <img
                className="w-4/5 transition-opacity mt-24 block mx-auto"
                src={images[renderId]}
                alt="crew pictures"
              />
            </div>

            <div className="w-5/12 mt-36 ml-56 flex flex-row-reverse ">
              <div className="ml-32 w-full">
                <h2 className="font-bel text-4xl text-faded mt- text-left tracking-widest uppercase ">
                  {isFetched ? data.crew[renderId].role : null}
                </h2>
                <h1 className="font-bel text-5xl text-white mt-6 text-left tracking-widest uppercase mx-auto">
                  {isFetched ? data.crew[renderId].name : null}
                </h1>
                <p className="text-white mt-12 w-96 h-48 font-bar text-left text-xl">
                  {isFetched ? data.crew[renderId].bio : null}
                </p>
              </div>
              <div className="h-80 w-36 flex flex-col justify-evenly">
                <div
                  onClick={changeRenderId}
                  className="w-16 h-16 border-2 border-white rounded-full cursor-pointer"
                >
                  <h1 className="text-2xl mt-3 text-white">1</h1>
                </div>
                <div
                  onClick={changeRenderId}
                  className="w-16 h-16 border-2 border-white rounded-full cursor-pointer"
                >
                  <h1 className="text-2xl mt-3 text-white">2</h1>
                </div>
                <div
                  onClick={changeRenderId}
                  className="w-16 h-16 border-2 border-white rounded-full cursor-pointer"
                >
                  <h1 className="text-2xl mt-3 text-white">3</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
