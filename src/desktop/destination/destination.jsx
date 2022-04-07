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

    const images = [moon, titan, mars, europa];

    const titles = ['moon', 'mars', 'europa', 'titan'];


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
                <div className="flex justify-evenly relative">
                    <div className="flex flex-col w-1/3 mt-36 ">
                        <h1 className="text-2xl font-barC text-white mb-20 uppercase tracking-widest mr-56 " > <span className="text-faded mr-3 ">01</span> pick your destination</h1>
                        <img className="w-4/5 h-4/5 block mx-auto" src={images[0]} alt="gallaxy pictures" />
                    </div>

                    <div className="w-1/3 mt-36" >

                        <nav className=" h-10 w-96">
                            <ul className="flex h-full  w-full justify-evenly mt-32">
                                {titles && titles.map((title, index) => (
                                    <li className="text-white uppercase  font-bel hover:border-b-2" key={index}>
                                        <a className="" href="">
                                            {title}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </nav>

                    </div>



                </div>
            </div>

        </>
    )
}

export default Destination