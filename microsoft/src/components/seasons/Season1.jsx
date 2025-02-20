import React from "react";

const Season1 = () => {
  const days = ["Monday", "Tuesday", "Wednesday"];
  const dates = ["21/06","22/06","23/06","28/06","29/06","30/06","05/07","06/07","07/07"];
  const type = ["Opening ", "Investor ", "Accessibility ", "Tech ", "Founders ", "Corporates ", "Go-to-Market ",
     "Government " ,"Ecosystems "];
  return (
    <div className="flex justify-center gap-5 mt-7">
        {dates.map((date, index)=>(
            <div key={index} className="flex justify-center flex-col items-center text-xs">
                <p className="text-gray-500">{days[index % days.length]}</p>
                <p className="font-semibold">{date}</p>
                <span className="text-gray-700">{type[index]}</span>
                <p className="text-gray-500">Day</p>
            </div>
        ))}
    </div>
  );
};

export default Season1;
