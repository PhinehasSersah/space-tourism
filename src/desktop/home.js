import { React, useEffect, useState } from "react";
import backgroud from "./background-home-desktop.jpg"
import tabletBackground from "./background-home-tablet.jpg"
import Header from "./hearder";

const Home = () => {
    const [renderImage, setRenderImage] = useState(0);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const images = [backgroud, tabletBackground];

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth);
        });
    })
    return (
        <>
            <div className="flex flex-col w-screen h-screen  bg-cover bg-center"
                style={{ backgroundImage: `url(${windowSize < 800 ? images[1]: images[0]})` }}
            >
                <Header />
                <div className=" flex flex-col  sm:flex-row align-middle justify-center sm:justify-between relative top-48 sm:top-0 h-3/4 ">

                    <div className=" flex flex-col sm:w-96 h-72  sm:absolute sm:top-80 left-32" >
                        <p className=" uppercase  text-sm sm:text-xl font-barC tracking-widest text-white">so, you want to travel to</p><br />
                        <span className="font-bel text-6xl sm:text-8xl text-white uppercase leading-tight"> space</span><br />
                        <p className="text-sm sm:text-xl font-barC w-60 text-white text-justify mx-auto">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
                            and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className=" w-56 mb-4 h-56 sm:w-96 sm:h-96 bg-transparent mx-auto flex justify-center items-center rounded-full hover:bg-backg">
                        <div className=" w-32 sm:w-52 h-32 sm:h-52 bg-white flex justify-center items-center  rounded-full cursor-pointer ">
                            <p className="text-center  text-dark font-bel text-xl  uppercase">explore</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;