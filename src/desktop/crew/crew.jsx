import { React, useState, useEffect } from "react";

import Header from "../hearder"
import ansari from "./image-anousheh-ansari.png"
import background from "./background-crew-desktop.jpg"
import douglas from "./image-douglas-hurley.png"
import mark from "./image-mark-shuttleworth.png"
import victor from "./image-victor-glover.png"


const Crew = () => {

    const [data, setData] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const [renderId, setRenderId] = useState(0);

    const images = [douglas, mark, victor, ansari];

    const fetchData = async () => {
        await fetch('data.json').then(
            response => response.json().then(info => {
                setData(info);
                setIsFetched(true);
            })
        )
    }
    console.log(data)
    useEffect(() => {
        fetchData();
    }, [isFetched])

    // function to get index of moon, mars, europa, titan

    const changeRenderId = (event) => {
        let target = event.target;
        let parent = target.parentNode;
        let index = Array.prototype.indexOf.call(parent.children, target);
        setRenderId(index);
        target.style.backgroundColor = "white";
        let siblings = [...parent.children].filter(child => child !== target);
        siblings.forEach(child => {
            return child.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        })

    }
    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-cover bg-center "
                style={{ backgroundImage: `url(${background})` }}
            >
                <Header />
                <div className="flex flex-row-reverse justify-evenly ">
                    <div className="flex flex-col h-2/3 w-1/3 mt-24">

                        <img className="w-4/5 transition-opacity block mx-auto" src={images[renderId]} alt="crew pictures" />
                     </div>

                    <div className="w-5/12 mt-24 ml-16" >
                        <h1 className="text-2xl text-left font-barC text-white mb-20 uppercase tracking-widest mr-56 " > <span className="text-faded mr-3 font-bold">02</span>meet your crew</h1>

                        <h2 className="font-bel text-4xl text-faded mt-24 text-left tracking-widest uppercase ">{isFetched ? data.crew[renderId].role : null}</h2>
                        <h1 className="font-bel text-5xl text-white mt-6 text-left tracking-widest uppercase mx-auto">
                            {isFetched ? data.crew[renderId].name : null}
                        </h1>
                        <p className="text-white mt-10 w-96 h-48 font-bar text-left text-xl">
                            {isFetched ? data.crew[renderId].bio : null}
                        </p>
                        <div className="h-12 w-56 flex justify-evenly align-middle mt-16 ">
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

export default Crew;