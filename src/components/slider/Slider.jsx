import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const maps = [
  {
    id: 1,
    img: "1.jpg",
  },
  {
    id: 2,
    img: "2.jpg",
  },
  {
    id: 3,
    img: "3.jpg",
  },
];

const Slider = ({ name }) => {
  // Handler Slider Arrows
  const [currentID, setCurrentID] = useState(0);

  const handlerNextSlider = () => {
    setCurrentID((prevID) => (prevID === maps.length - 1 ? 0 : prevID + 1));
  };

  const handlerBackSlider = () => {
    setCurrentID((prevID) => (prevID === maps.length - 1 ? 0 : prevID + 1));
  };

  return (
    <>
      <div className="relative h-screen w-full mt-5 mb-20">
        <h3 className="font-bold text-center text-xl p-2 border-b-2 w-3 m-auto h-auto flex justify-center my-5 ">
          {name}
        </h3>

        <section className="mx-5 flex items-center justify-between my-5 absolute z-10 top-0 bottom-0 right-0 left-0">
          <FontAwesomeIcon
            icon={faCaretLeft}
            onClick={handlerBackSlider}
            className="cursor-pointer hover:text-black-50 hover:bg-black-500 p-2 rounded"
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            onClick={handlerNextSlider}
            className="cursor-pointer hover:text-black-50 hover:bg-black-500 p-2 rounded"
          />
        </section>
        {maps.map((map, idx) => (
          <ul key={idx} className="absolute left-0 right-0 ">
            <li>
              <img
                src={`imgs/${map.img}`}
                alt={`Slide ${map.id}`}
                className={`absolute left-0 right-0 top-0 h-screen m-auto cursor-pointer transition-opacity duration-700 ${
                  idx === currentID
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Slider;
