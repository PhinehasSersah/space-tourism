import {React,useState, useEffect} from "react";
import jsonData from "../data.json";
import backgroud from "./background-home-desktop.jpg"
import Header from "./hearder";




const Home = () => { 
    
    const [data, setData] = useState([]);

    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    useEffect(() => {
        setData(loadData());
    },[])
    console.log(data)
    return (
        <>
        <div className="w-screen h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroud})`}} 
        >
            <Header />
        </div>
        </>
    )
}

export default Home;