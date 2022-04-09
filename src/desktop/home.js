import { React } from "react";
import backgroud from "./background-home-desktop.jpg"
import Header from "./hearder";




const Home = () => {

    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-cover bg-center  "
             style={{ backgroundImage: `url(${backgroud})` }}
            >
                <Header />
                <div className="flex justify-between relative ">

                    <div className=" w-96 h-80  absolute top-96 left-32" >
                        <p className=" uppercase text-xl font-barC tracking-widest text-white">so, you want to travel to</p><br />
                        <span className="font-bel text-8xl text-white uppercase leading-relaxed"> space</span><br />
                        <p className="text-base font-barC w-60 text-white text-justify mx-auto">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back,
                            and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className=" w-96 h-96 bg-transparent absolute top-96 right-32 flex justify-center items-center rounded-full hover:bg-backg">
                        <div className=" w-52 h-52 bg-white flex justify-center items-center  top-96 right-32 rounded-full cursor-pointer ">
                            <p className="text-center  text-dark font-bel text-xl  uppercase">explore</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;