import React from "react";
// import unicorn from "../assets/unicorn.png";
import { bgImg, logo } from "../utils/constants";

const First = () => {
    return (
        <div className="w-full min-h-svh">
            {/* Background Image - Visible on Large Screens */}
            <div 
                className="lg:block absolute w-full h-fullrelative object-fill object-center min-h-screen bg-no-repeat" 
                // style={{ backgroundImage: `url(${unicorn})` }}
                style={{ backgroundImage: `url(${bgImg})` }}
            ></div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start w-full h-full">
                {/* Image Section for Small Screens */}
                <div 
                    className="w-screen h-80 min-h-[50vh]  bg-center bg-contain max-w-full bg-no-repeat lg:hidden" 
                    // style={{ backgroundImage: `url(${unicorn})` }}
                    style={{ backgroundImage: `url(${bgImg})` }}
                ></div>

                {/* Text Content */}
                <div className="w-full font-semibold text-center lg:text-start lg:w-1/2 px-6 lg:px-12 py-10 bg-stone-500 text-white lg:bg-transparent lg:absolute lg:left-12 ">
                    <p className="text-lg">Microsoft for Startups Middle East</p>
                    <h1 className="text-4xl md:text-5xl leading-tight">
                        Highway to 100 <br /> 
                        Unicorns
                        <span className="block text-sky-400 text-6xl">Virtual Conference</span>
                    </h1>
                    <p className="text-lg mt-4 inline-block rounded-lg">
                        Helping founders gain insights on <br/> how to scale their startups
                    </p>
                    <p className="mt-6 flex justify-center lg:justify-start items-center gap-2">
                        in partnership with 
                        <img src={logo} alt="Partner Logo" className="w-36 h-auto" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default First;
