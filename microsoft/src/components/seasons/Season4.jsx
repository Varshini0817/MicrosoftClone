import React from "react";

const Season4 = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const dates = ["04/09", "05/09", "06/09", "07/09", "08/09", "11/09", "12/09", "13/09", "14/09"];
   return (
    <div className="flex justify-center gap-5 mt-7">
        {dates.map((date, index)=>(
            <div key={index} className="flex justify-center flex-col items-center text-xs">
                <p className="text-gray-500">
                    {days[index % days.length]}
                </p>
                <p className="font-semibold">{date}</p>
            </div>
        ))}
    </div>
  );
};

export default Season4;
