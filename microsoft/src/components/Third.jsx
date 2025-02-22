import { useState, useRef, useEffect } from "react";
import Season1 from "./Seasons/Season1";
import Season2 from "./seasons/Season2";
import Season3 from "./seasons/Season3";
import Season4 from "./seasons/Season4";
import Season5 from "./seasons/Season5";

const Third = () => {
  const [selected, setSelected] = useState("Season 1");
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const seasons = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"];

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSeasonComponent = () => {
    switch (selected) {
      case "Season 1":
        return <Season1 />;
      case "Season 2":
        return <Season2 />;
      case "Season 3":
        return <Season3 />;
      case "Season 4":
        return <Season4 />;
      case "Season 5":
        return <Season5 />;
      default:
        return null;
    }
  };

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="m-4">
      <h2 className="font-bold text-center text-3xl">
        Highway to 100 Unicorns: AI Edition Virtual Conference
      </h2>

      {/* Scrollable Season Tabs with Arrows */}
      <div className="relative flex items-center justify-center m-3 px-3">
        {/* Left Arrow (shown only on small screens & when scroll is not at start) */}
        {isSmallScreen && showLeftArrow && (
          <button
            className="absolute left-0 top-3 z-10 shadow-md py-4 px-2 cursor-pointer "
            style={{
              background: "linear-gradient(to right, rgba(255, 255, 255, 3), rgba(255, 255, 255, 0))",
            }}        
            onClick={scrollLeft}
          >
            &lt; {/* Left Arrow Icon */}
          </button>
        )}

        {/* Scrollable Tabs */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x whitespace-nowrap no-scrollbar m-3"
        >
          {seasons.map((season) => (
            <div
              key={season}
              className={`cursor-pointer active:border active:border-dotted ${
                selected === season
                  ? "border-black border-b-[#0067B8] border-b-2 bg-gray-200"
                  : "border-transparent text-gray-500 hover:bg-gray-200 hover:border-gray-400"
              }`}
              onClick={() => setSelected(season)}
            >
              <div
                className={`${
                  selected === season
                    ? "border-2 border-black border-dotted px-5 py-3 rounded"
                    : "px-5 py-3 border-transparent"
                }`}
              >
                <p>{season}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow (shown only on small screens & when scroll is not at end) */}
        {isSmallScreen && showRightArrow && (
          <button
            className="absolute right-0 top-3 z-1 shadow-md py-4 px-2 cursor-pointer" 
            style={{
              background: "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
            }}
        
            onClick={scrollRight}
          >
            &gt; {/* Right Arrow Icon */}
          </button>
        )}
      </div>

      {/* Selected Season Content */}
      <div>{renderSeasonComponent()}</div>
    </div>
  );
};

export default Third;
