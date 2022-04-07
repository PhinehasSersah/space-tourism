import { React, useState, useEffect } from "react";
import jsonData from "../../data.json"
// import backgroud from "./background-home-desktop.jpg"
import Header from "../hearder";
import moon from "./image-moon.png"
import background from "./background-destination-desktop.jpg"
import titan from "./image-titan.png"
import mars from "./image-mars.png"
import europa from "./image-europa.png"




const Destination = () => {

    const images = [moon, titan, mars, europa]


    const [data, setData] = useState([]);

    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    useEffect(() => {
        setData(loadData());
    }, [])



    console.log(data)
    

    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-cover bg-center "
                style={{ backgroundImage: `url(${background})` }}
            >
                <Header />
                <div className="flex justify-evenly">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bel mb-20" >01   pick your destination</h1>
                        <img src ={images[0]} alt="gallaxy pictures" />
                    </div>

                    <div></div>

                

                </div>
            </div>

        </>
    )
}

export default Destination