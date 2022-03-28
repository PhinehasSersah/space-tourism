import {React,useState, useEffect} from "react";
import jsonData from "../data.json";




const Home = () => { 
    
    const [data, setData] = useState([]);

    const loadData = () => JSON.parse(JSON.stringify(jsonData));
   
    console.log(data);
    useEffect(() => {
        setData(loadData());
    },[])
    console.log(data)
    return (
        <section className="" >

        </section>
    )
}

export default Home;