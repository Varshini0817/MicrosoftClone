// import { secondImg } from "../utils/constants";
import secondImg from "../assets/secondImg.png"

const Second = () => {
  return (
    <div className="bg-neutral-100 mx-16 flex px-7 py-2">
      <div className="flex bg-white rounded-4xl  m-5 mx-10">
        <div className="flex flex-col m-4 p-3">
          <h2 className="text-4xl m-4 font-semibold">
            Highway to 100 Unicorns Virtual <br/>Conference
          </h2>
          <p className="p-4 text-justify text-sm">
            Our H100 virtual conferences feature daily sessions, fireside chats,
            panel discussions and workshops covering startup trends and the most
            pressing issues facing entrepreneurs. Our upcoming season will be
            focused on themes in AI, featuring experts and successful
            entrepreneurs sharing key insights and stories.
          </p>
        </div>
        <img
          src={secondImg}
          alt="second"
          className="rounded-4xl h-72 p-1"
        ></img>
      </div>
    </div>
  );
};

export default Second;
