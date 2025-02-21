import  { useState } from "react";
import Card1 from "./season1/Card1";

const Season2 = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active date

  const days = ["Monday", "Tuesday", "Wednesday"];
  const dates = [
    "24/01", "25/01", "26/01", "31/01",
    "01/02", "02/02", "07/02", "08/02", "09/02"
  ];
  const type = [
    "Talent", "Tech Skills", "Product", "Go To Market Strategy",
    "User Acquisition", "Measuring Impact", "LaunchPad Abu Dhabi",
    "Microsoft for Startups", "External Management"
  ];

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-1 mt-7">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`flex justify-center flex-col items-center text-xs cursor-pointer transition-all active:border active:border-dotted
              ${
                activeIndex === index
                  ? "bg-gray-200 border-black border-b-2 border-b-[#0067B8]"
                  : "border-transparent hover:bg-gray-200 hover:border-gray-400"
              }`}
            onClick={() => setActiveIndex(index)} // Set active on click
          >
            <div className={`flex justify-center flex-col items-center ${activeIndex === index ? "border-2 border-black border-dotted rounded p-1" : "px-2 border-transparent"}`}>
              <p className="text-gray-500">{days[index % days.length]}</p>
              <p
                className={`font-semibold px-3 py-1 rounded-lg transition-all
                ${activeIndex === index ? "text-white bg-[#5025BB]" : ""}`}
              >
                {date}
              </p>
              <span className="text-gray-500">{type[index]}</span>
            </div>
          </div>
        ))}
      </div>
      <Card1 activeIndex={activeIndex} />
    </div>
  );
};

export default Season2;
