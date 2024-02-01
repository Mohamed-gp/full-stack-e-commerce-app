"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCartShopping } from "react-icons/fa6";
import HeroProduct from "./HeroProduct";
import HeroSlider from "./HeroSlider";


export default function Hero() {
  const [slideIndex, setslideIndex] = useState<number>(0);
  return (
    <div className="Hero">
      <HeroSlider slideIndex={slideIndex} setslideIndex={setslideIndex} />
      <div
        className="flex
         w-[300vw] bg-[#201F20] text-[white] duration-500"
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        <HeroProduct />
        <HeroProduct />
        <HeroProduct />
      </div>

    </div>
  );
}
