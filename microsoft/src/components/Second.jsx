import secondImg from "../assets/secondImg.png";

const Second = () => {
  return (
    <div className="bg-neutral-100 mx-4 md:mx-16 flex px-4 md:px-7 py-2">
      <div className="flex flex-col lg:flex-row bg-white rounded-4xl m-5 mx-4 md:mx-10 p-4 md:p-6">
        
        {/* Text Content */}
        <div className="flex flex-col m-2 md:m-4 p-2 md:p-4">
          <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
            Highway to 100 Unicorns Virtual <br /> Conference
          </h2>
          <p className="text-sm md:text-base text-justify">
            Our H100 virtual conferences feature daily sessions, fireside chats,
            panel discussions, and workshops covering startup trends and the most
            pressing issues facing entrepreneurs. Our upcoming season will be
            focused on themes in AI, featuring experts and successful
            entrepreneurs sharing key insights and stories.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end w-full p-0">
          <img
            src={secondImg}
            alt="second"
            className="rounded-4xl w-full p-1 max-w-md lg:max-w-none h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
