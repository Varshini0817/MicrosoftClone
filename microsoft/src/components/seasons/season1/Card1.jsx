import { s1 } from "../../utils/constants";

// Reusable Card Component
const Card = ({ image, link, text }) => (
  <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden w-full sm:w-80 md:w-72 lg:w-80 cursor-pointer">
    <a href={link}>
      <img src={image} alt="Podcast Thumbnail" className="w-full h-auto object-fit" />
    </a>
    <div className="py-3 px-2 h-24 flex items-center">
      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 whitespace-normal leading-tight">
        {text}
      </p>
    </div>
  </div>
);

const Card1 = ({ activeIndex }) => {
  const keys = Object.keys(s1); // Get all the keys (0, 1, 2, 3)
  const index = keys[activeIndex % keys.length]; // Ensure wrapping within bounds

  return activeIndex!=null ?(
    <div className="flex flex-wrap justify-center items-start gap-4 p-5">
      {s1[index]?.map(([image, link, text], i) => (
        <Card key={i} image={image} link={`https://www.youtube.com/watch?v=${link}`} text={text} />
      ))}
    </div>
  ):"";
};


export default Card1;
