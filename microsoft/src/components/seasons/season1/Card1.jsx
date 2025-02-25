import { useState } from "react";
import { s1 } from "../../utils/constants";

const Card = ({ image, link, text, onOpen }) => (
  <div
    className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden w-full sm:w-80 md:w-72 lg:w-80 cursor-pointer"
    onClick={() => onOpen(link)}
  >
    <img src={image} alt="Podcast Thumbnail" className="w-full h-auto object-cover" />
    <div className="py-3 px-2 h-24 flex items-center">
      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 whitespace-normal leading-tight">
        {text}
      </p>
    </div>
  </div>
);

const Card1 = ({ activeIndex }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoId("");
  };

  const keys = Object.keys(s1);
  const index = keys[activeIndex % keys.length];

  return activeIndex !== null ? (
    <div className="relative flex flex-wrap justify-center items-start gap-4 p-5">
      {s1[index]?.map(([image, link, text], i) => (
        <Card key={i} image={image} link={link} text={text} onOpen={openModal} />
      ))}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent  bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-2 max-w-3xl w-full relative">
          <button
              onClick={closeModal}
              className="absolute top-2 right-2 cursor-pointer bg-gray-200 text-gray-100  w-8 h-8 rounded flex items-center justify-center text-lg font-bold transition duration-300"
            >
              ✖
            </button>
            <iframe
              className="w-full h-64 sm:h-80 md:h-96"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"

              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  ) : (
    ""
  );
};

export default Card1;
