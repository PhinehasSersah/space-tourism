import { React, useState, useEffect } from "react";
import Header from "../hearder";
import background from "./background-technology-desktop.jpg"
import launch from "./image-launch-vehicle-portrait.jpg"
import capsule from "./image-space-capsule-portrait.jpg"
import space from "./image-spaceport-portrait.jpg"



const Technology = () => {

    const [data, setData] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const [renderId, setRenderId] = useState(0);

    const images = [launch,space, capsule];


    const fetchData = async () => {
        await fetch('data.json').then(
            response => response.json().then(data => {
                setData(data);
                setIsFetched(true);
            })
        )
    }

    useEffect(() => {
        fetchData();
    }, [isFetched])

// function to get index of moon, mars, europa, titan
    const changeRenderId = (event) => {
        const target = event.target;
        const parent = target.parentNode;
        const index = Array.prototype.indexOf.call(parent.children, target);
        setRenderId(index);
    }
    return (
        <>
           <div className="flex flex-col w-screen h-screen bg-cover bg-center "
                style={{ backgroundImage: `url(${background})` }}
            >
                <Header />
                <div className="flex flex-row-reverse justify-evenly relative">
                    <div className="flex flex-col h-5/6 w-1/3 mt-36">

                        <img className="w-4/5 transition-opacity  block mx-auto" src={images[renderId]} alt="crew pictures" />
                    </div>

                    <div className="w-5/12 mt-36 ml-16 " >
                        <h1 className="text-2xl text-left font-barC text-white mb-20 uppercase tracking-widest mr-56 " > <span className="text-faded mr-3 font-bold">02</span>meet your crew</h1>

                        <h2 className="font-bel text-4xl text-faded mt-36 text-left tracking-widest uppercase ">{isFetched ? data.crew[renderId].role : null}</h2>
                        <h1 className="font-bel text-5xl text-white mt-6 text-left tracking-widest uppercase mx-auto">
                            {isFetched ? data.crew[renderId].name : null}
                        </h1>
                        <p className="text-white mt-12 w-96 h-48 font-bar text-left text-xl">
                            {isFetched ? data.crew[renderId].bio : null}
                        </p>
                        <div className="h-12 w-56 flex justify-evenly align-middle mt-24 ">
                            <div onClick={changeRenderId} className="w-5 h-5 bg-white rounded-full cursor-pointer"></div>
                            <div onClick={changeRenderId} className="w-5 h-5 bg-faded rounded-full cursor-pointer"></div>
                            <div onClick={changeRenderId} className="w-5 h-5 bg-faded rounded-full cursor-pointer"></div>
                            <div onClick={changeRenderId} className="w-5 h-5 bg-faded rounded-full cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Technology;