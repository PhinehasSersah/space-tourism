import { React, useState, useEffect } from "react";
import Footer from "../footer";
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
    parentSiblings.forEach((child) => (child.style.backgroundColor = "black"));
    parentSiblings.forEach(
      (child) => (child.children[0].style.color = "white")
    );
  };

  return (
    <>
      <div
        className="flex flex-col w-screen h-mob sm:h-tab lg:h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <div className="flex flex-col">
          <h1 className="lg:text-2xl text-center sm:ml-10 sm:text-xl mx-auto w-72 lg:ml-56 mt-36 lg:mt-14 lg:text-left font-barC text-white lg:tracking-wider uppercase tracking-widest">
            {" "}
            <span className="text-faded mr-3 font-bold">03</span> space launch
            101
          </h1>
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:relative ">
            <div className="flex mx-auto mt-8 lg:flex-col w-screen sm:w-full h-60 lg:h-5/6 lg:w-2/5 lg:ml-40">
              <img
                className="lg:w-tech-width lg:h-tech-img object-cover sm:w-screen sm:h-80 block mx-auto"
                src={images[renderId]}
                alt="crew pictures"
              />
            </div>

            <div className="mt-10 lg:ml-56 flex flex-col-reverse lg:flex-row-reverse lg:h-96 ">
              <div className=" mt-8 lg:mt-0 lg:ml-12 w-96 mx-auto">
                <h2 className="font-barC text-sm sm:text-base text-white text-center lg:text-left tracking-widest uppercase ">
                  the terminology...
                </h2>
                <h1 className="font-bel text-2xl sm:text-4xl lg:text-5xl sm:w-max sm:text-center text-white mt-6 lg:mt-3 lg:text-left sm:tracking-wider tracking-widest uppercase mx-auto">
                  {isFetched ? data.technology[renderId].name : null}
                </h1>
                <p className="text-white mt-8 w-96 h-48 font-bar lg:text-left text-base sm:text-base lg:text-lg">
                  {isFetched ? data.technology[renderId].description : null}
                </p>
              </div>

              <div className="lg:h-80 lg:w-36 mx-auto sm:mt-24 lg:mt-0 flex lg:flex-col justify-evenly">
                <div className="w-16 h-16 bg-white border-2 mx-2 border-faded rounded-full cursor-pointer">
                  <h1
                    onClick={changeRenderId}
                    className="text-2xl w-full font-bel h-full pt-3 text-dark"
                  >
                    1
                  </h1>
                </div>
                <div className="w-16 h-16 border-2  border-faded mx-2 rounded-full cursor-pointer">
                  <h1
                    onClick={changeRenderId}
                    className="text-2xl w-full font-bel h-full pt-3 text-white"
                  >
                    2
                  </h1>
                </div>
                <div className="w-16 h-16 border-2 border-faded mx-2 rounded-full cursor-pointer">
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
        <div className="mt-28 sm:mt-16 lg:-mt-2">
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Technology;
