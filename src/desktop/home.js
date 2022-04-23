import { React, useEffect, useState } from "react";
import backgroud from "./background-home-desktop.jpg"
import tabletBackground from "./background-home-tablet.jpg"
import Header from "./hearder";
import Footer from './footer'

const Home = () => {
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
                style={{ backgroundImage: `url(${windowSize < 800 ? images[1] : images[0]})` }}
            >
                <Header />
                <div className=" flex flex-col align-middle justify-center relative top-16 lg:flex-row lg:justify-evenly lg:items-end h-3/4 sm:flex-col">
                    <div className=" flex flex-col h-72 sm:w-2/3 sm:h-80 sm:mx-auto lg:mx-0 lg:mb-20">
                        <p className=" uppercase  text-sm lg:text-lg lg:mr-16 font-barC tracking-widest text-white">so, you want to travel to</p><br />
                        <span className="font-bel text-6xl sm:text-8xl lg:text-9xl text-white uppercase leading-tight"> space</span><br />
                        <p className="text-sm font-normal lg:text-lg font-barC w-60 lg:w-96 text-white text-justify mx-auto">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
                            and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className=" w-56 lg:w-96 lg:h-96 mb-4 h-56 sm:w-60 sm:h-60 lg:mb-20 bg-transparent mx-auto flex justify-center items-center rounded-full hover:bg-backg">
                        <div className=" w-32 sm:w-40  h-32 sm:h-40 lg:w-circle lg:h-circh  bg-white flex justify-center items-center  rounded-full cursor-pointer ">
                            <p className="text-center  text-dark font-bel text-xl  uppercase">explore</p>
                        </div>
                    </div>
                </div>
                <div className="-mt-5">
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default Home;