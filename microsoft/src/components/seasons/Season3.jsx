import React from "react";

const Season3 = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
  const dates = ["29/08" ,"30/08" ,"31/08" ,"01/09" ,"05/09" ,"06/09" ,"07/09" ,"08/09" ,"12/09" ,"15/09"];
   return (
    <div className="flex justify-center gap-5 mt-7">
        {dates.map((date, index)=>(
            <div key={index} className="flex justify-center flex-col items-center text-xs">
                <p className="text-gray-500">
                    {index === dates.length - 1 ? days[3] : days[index % days.length]}
                </p>
                <p className="font-semibold">{date}</p>
            </div>
        ))}
    </div>
  );
};

export default Season3;
