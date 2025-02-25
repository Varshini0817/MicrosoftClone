import secondImg from "../assets/secondImg.png";

const Second = () => {
  return (
    <div className="bg-neutral-50 w-full xl:max-w-11/12 shadow-xs sm:mx-auto px-5 md:px-10 py-5 lg:py-10">
      <div className="flex flex-col sm:flex-row bg-white shadow-sm rounded-4xl h-auto md:h-60 lg:h-80 lg:mx-4 ">
        {/* Text Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-5 m-0 sm:m-2">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 ">
            Highway to 100 Unicorns Virtual
            <span className="sm:hidden"> </span> {/* Space for small screens */}
            <span className="hidden xl:inline">
              <br />
            </span>
            Conference
          </h2>

          <p className="text-[13px] text-left leading-relaxed">
            Our H100 virtual conferences feature daily sessions, fireside chats,
            panel discussions, and workshops covering startup trends and the
            most pressing issues facing entrepreneurs. Our upcoming season will
            be focused on themes in AI, featuring experts and successful
            entrepreneurs sharing key insights and stories.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={secondImg}
            alt="Conference"
            className="rounded-4xl p-1 w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
