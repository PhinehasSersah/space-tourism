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
      response.json().then((info) => {
        setData(info);
        setIsFetched(true);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [isFetched]);

  // function to get index of space objects
  const changeRenderId = (event) => {
    let target = event.target;
    let renderIndex = target.textContent - 1;
    setRenderId(renderIndex);
    let parent = target.parentNode;
    let gParent = parent.parentNode;
    parent.style.backgroundColor = "white";
    target.style.color = "black";
    let parentSiblings = [...gParent.children].filter(
      (child) => child !== parent
    );
    parentSiblings.forEach((child) => {
      return (child.style.backgroundColor = "black");
    });
    parentSiblings.forEach((child) => {
      return (child.children[0].style.color = "white");
    });
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
            <div className="flex flex-col h-5/6 w-2/5">
              <img
                className="w-4/5 transition-opacity mt-2 block mx-auto"
                src={images[renderId]}
                alt="crew pictures"
              />
            </div>

            <div className="w-5/12 mt-36 ml-56 flex flex-row-reverse ">
              <div className="ml-32 w-full">
                <h2 className="font-bar text-sm text-white text-left tracking-widest uppercase ">
                  the terminology...
                </h2>
                <h1 className="font-bel text-5xl text-white mt-6 text-left tracking-widest uppercase mx-auto">
                  {isFetched ? data.technology[renderId].name : null}
                </h1>
                <p className="text-white mt-8 w-96 h-48 font-bar text-left text-xl">
                  {isFetched ? data.technology[renderId].description : null}
                </p>
              </div>
              <div className="h-80 w-36 flex flex-col justify-evenly">
                <div className="w-16 h-16 bg-white border-2 border-faded rounded-full cursor-pointer">
                  <h1
                    onClick={changeRenderId}
                    className="text-2xl w-full font-bel h-full pt-3 text-dark"
                  >
                    1
                  </h1>
                </div>
                <div className="w-16 h-16 border-2  border-faded rounded-full cursor-pointer">
                  <h1
                    onClick={changeRenderId}
                    className="text-2xl w-full font-bel h-full pt-3 text-white"
                  >
                    2
                  </h1>
                </div>
                <div className="w-16 h-16 border-2 border-faded rounded-full cursor-pointer">
                  <h1
                    onClick={changeRenderId}
                    className="text-2xl w-full font-bel h-full pt-3  text-white"
                  >
                    3
                  </h1>
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
