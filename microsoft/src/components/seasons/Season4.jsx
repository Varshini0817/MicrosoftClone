import React, { useState, useRef, useEffect } from "react";
import Card1 from "./season1/Card1";

const Season4 = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active date

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const dates = ["04/09", "05/09", "06/09", "07/09", "08/09", "11/09", "12/09", "13/09", "14/09"];

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div>
    <div className="relative flex items-center justify-center mt-7">
      {isSmallScreen && showLeftArrow && (
        <button
          className="absolute left-0 top-0 h-full z-10 shadow-md py-4 px-2 cursor-pointer"
          style={{
            background: "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
          onClick={scrollLeft}
        >
          &lt;
        </button>
      )}

      <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth snap-x whitespace-nowrap no-scrollbar mb-8">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`flex justify-center flex-col items-center text-xs cursor-pointer transition-all active:border active:border-dotted
              ${
                activeIndex === index
                  ? "bg-gray-200 border-black border-b-2 border-b-[#0067B8]"
                  : "border-transparent hover:bg-gray-200 hover:border-gray-400"
              }`}
            onClick={() => {setActiveIndex(index); window.location.hash = `s4-${index + 1}`;}}
          >
              <div
              className={`flex justify-center flex-col items-center ${
                activeIndex === index ? "border-2 border-black border-dotted rounded p-1" : "px-2 border-transparent"
              }`}
            >
              <p className="text-gray-500">{days[index % days.length]}</p>
              <p
                className={`font-semibold px-3 py-1 rounded-lg transition-all
                ${activeIndex === index ? "text-white bg-[#5025BB]" : ""}`}
              >
                {date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isSmallScreen && showRightArrow && (
        <button
          className="absolute right-0 top-0 h-full z-10 shadow-md py-4 px-2 cursor-pointer"
          style={{
            background: "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          }}
          onClick={scrollRight}
        >
          &gt;
        </button>
      )}
    </div>

    <Card1 activeIndex={activeIndex} />
  </div>
  );
};

export default Season4;
