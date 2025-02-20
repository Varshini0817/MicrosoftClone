import React from "react";

const Season2 = () => {
  const days = ["Monday", "Tuesday", "Wednesday"];
  const dates = ["24/01", "25/01" ,"26/01" ,"31/01" ,"01/02" ,"02/02" ,"07/02" ,"08/02", "09/02"];
  const type = ["Talent ", "Tech Skills ", "Product ", "Go To Market Strategy ", "User Acquisition ", "Measuring Impact ", "launchPad Abu Dhabi",
     "Microsoft for Startups" ,"External Management "];
  return (
    <div className="flex justify-center gap-5 mt-7">
        {dates.map((date, index)=>(
            <div key={index} className="flex justify-center flex-col items-center text-xs">
                <p className="text-gray-500">{days[index % days.length]}</p>
                <p className="font-semibold">{date}</p>
                <span className="text-gray-700">{type[index]}</span>
            </div>
        ))}
    </div>
  );
};

export default Season2;
