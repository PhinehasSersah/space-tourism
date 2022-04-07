import { React, useState, useEffect } from "react";
import jsonData from "../../data.json"
// import backgroud from "./background-home-desktop.jpg"
import Header from "../hearder";




const Destination = () => {

    const [data, setData] = useState([]);

    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    useEffect(() => {
        setData(loadData());
    }, [])
    console.log(data.destinations[0].images.png)
    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-cover bg-center " 
            style={{ backgroundImage: `url(${data})` }}
            >
                <Header />
                <div className="flex justify-between relative ">

                   

            </div>
            </div>

        </>
    )
}

export default Destination;