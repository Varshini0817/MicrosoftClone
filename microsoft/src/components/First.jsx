import unicorn from "../assets/unicorn.png";
import unicornSmall from "../assets/unicorn_small.png";
import logo from "../assets/logo.png";

const First = () => {
    return (
        <div className="w-full min-h-screen relative pb-0">
            {/* Background Image - Visible on Large Screens */}
            <div 
                className="absolute  left-0  lg:w-full sm:h-[570px] bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${unicorn})`,
                        backgroundSize: "var(--my-image-size, contain)"
                 }}
            ></div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center  lg:justify-center lg:items-start w-full h-full">
                {/* Image Section for Small Screens */}
                <div 
                    className="w-screen h-50 min-h-[60vh] bg-center bg-cover max-w-full bg-no-repeat lg:hidden" 
                    style={{ backgroundImage: `url(${unicornSmall})` }}
                ></div>

                {/* Text Content */}
                <div className="w-full font-semibold text-center lg:text-start lg:top-25 lg:w-1/2 px-6 py-3 lg:px-12  bg-neutral-500 text-white lg:bg-transparent lg:absolute lg:left-12">
                    <p className="text-md sm:text-sm">Microsoft for Startups Middle East</p>
                    <h1 className="text-2xl md:text-2xl lg:text-4xl leading-tight">
                        <p className="sm:mt-3 mb-5 lg:mb-0">Highway to 100 <br></br></p>
                        <p>Unicorns</p>
                        </h1>
                        <span className="block text-sky-400 text-5xl">Virtual Conference</span>
                    
                    <p className="text-md sm:text-sm md:text-md mt-4 inline-block rounded-lg">
                        Helping founders gain insights on <br/> how to scale their startups
                    </p>
                    <p className=" flex justify-center sm:text-sm md:text-md lg:justify-start items-center gap-2">
                        in partnership with 
                        <img src={logo} alt="Partner Logo" className="w-36 h-auto" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default First;
