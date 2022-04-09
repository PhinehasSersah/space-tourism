import { React, useState, useEffect } from "react";
// import jsonData from "../../data.json"
// import backgroud from "./background-home-desktop.jpg"
import Header from "../hearder";
import moon from "./image-moon.png"
import background from "./background-destination-desktop.jpg"
import titan from "./image-titan.png"
import mars from "./image-mars.png"
import europa from "./image-europa.png"


const Destination = () => {

    const [data, setData] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const [renderId, setRenderId] = useState(0);

    const images = [moon, mars, europa, titan];
    const titles = ['moon', 'mars', 'europa', 'titan'];

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
                <div className="flex justify-evenly relative">
                    <div className="flex flex-col w-1/3 mt-36 ">
                        <h1 className="text-2xl font-barC text-white mb-20 uppercase tracking-widest mr-56 " > <span className="text-faded mr-3 font-bold">01</span> pick your destination</h1>
                        <img className="w-4/5 h-4/5 block mx-auto" src={images[renderId]} alt="gallaxy pictures" />
                    </div>

                    <div className="w-1/3 mt-36 bg " >

                        <nav className=" h-10  mx-auto">
                            <ul data-gallaxy className="flex h-full w-96 mx-auto render mt-16">
                                {titles && titles.map((title, index) => (
                                    <li onClick={changeRenderId} className="text-white cursor-pointer uppercase mr-9 font-bel hover:border-b-2" key={index}>

                                        {title}

                                    </li>
                                ))}

                            </ul>
                        </nav>
                        <h1 className="font-bel text-8xl text-white mt-12 tracking-widest uppercase ">
                            {isFetched ? data.destinations[renderId].name : null}
                        </h1>
                        <p className="text-white mt-12 w-96 font-bar text-xl text-left mx-auto">
                            {isFetched ? data.destinations[renderId].description : null}
                        </p>
                        <div className="h-24 w-96 flex justify-start mt-12 border-t-2 mx-auto border-white">
                            <div className="flex flex-col mt-6">
                                <p className="text-white uppercase text-sm font-bel text-left" >avg. distance</p>
                                <p className="text-white text-3xl font-bel uppercase text-left">
                                    {isFetched ? data.destinations[renderId].distance : null}
                                </p>
                            </div>
                            <div className="flex flex-col ml-16 mt-6">
                                <p className="text-white uppercase text-sm font-bel" >est. travel time</p>
                                <p className="text-white text-3xl font-bel uppercase text-left">
                                    {isFetched ? data.destinations[renderId].travel : null}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Destination