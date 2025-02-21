import { useState } from "react";
import Season1 from "./Seasons/Season1";
import Season2 from "./seasons/Season2";
import Season3 from "./seasons/Season3";
import Season4 from "./seasons/Season4";
import Season5 from "./seasons/Season5";

const Third = () => {
  const [selected, setSelected] = useState("Season 1"); // Track selected season

  const seasons = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"];

  const renderSeasonComponent = () => {
    switch(selected) {
        case "Season 1":
            return <Season1/>;
        case "Season 2":
            return <Season2/>;
        case "Season 3":
            return <Season3/>;
        case "Season 4":
            return <Season4/>;
        case "Season 5":
            return <Season5/>;
        
    }
  }
  return (
    <div className="m-4">
      <h2 className="font-bold text-center text-3xl">
        Highway to 100 Unicorns: AI Edition Virtual Conference
      </h2>

      {/* Season Tabs */}
      <div className="flex justify-center m-3 px-3 gap-7 text-xs text-gray-500 ">
        {seasons.map((season) => (
          <div
            key={season}
            className={`cursor-pointer active:border active:border-dotted${
              selected === season
                ? "border-black  border-b-[#0067B8] border-b-2  bg-gray-200"
                : "border-transparent text-gray-500 hover:bg-gray-200 hover:border-gray-400"
            }`}
            onClick={() => setSelected(season)}
          >
            <div className={`${selected === season ? "border-2 border-black border-dotted px-5 py-3 rounded" : "px-5 py-3 border-transparent"} `}>
              <p>{season}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
      {renderSeasonComponent()}
      </div>
    </div>
  );
};

export default Third;
