"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface HeroSliderProps {
  slideIndex: number;
  setslideIndex: (value: number) => void;
}

const emptyArray: number[] = [];
for (let i = 0; i < 3; i++) {
  emptyArray.push(i);
}

export default function HeroSlider({
  slideIndex,
  setslideIndex,
}: HeroSliderProps) {
  return (
    <div className="fixed z-20 h-full w-[100vw]">
      <button
        className=" bg-white text-black absolute left-12 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-2 disabled:opacity-30"
        disabled={slideIndex === 0}
        onClick={() => setslideIndex(slideIndex - 1)}
      >
        <FaArrowLeft />
      </button>
      <button
        className=" bg-white text-black absolute right-12 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-2 disabled:opacity-30"
        disabled={slideIndex === 2}
        onClick={() => setslideIndex(slideIndex + 1)}
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-3">
        {emptyArray.map((element) => (
          <div
            className={`cursor-pointer bg-white h-3 w-3 rounded-full ${element === slideIndex ? "opacity-100" : "opacity-40"}`}
            onClick={() => setslideIndex(element)}
          ></div>
        ))}
      </div>
    </div>
  );
}
