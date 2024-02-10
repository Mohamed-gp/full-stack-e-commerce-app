// "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCartShopping } from "react-icons/fa6";
import HeroProduct from "./HeroProduct";
import HeroSlider from "./HeroSlider";

import axios from "axios";

export default function Hero() {
  axios.post("http://localhost:3000/api/products").then((response) => {
    console.log(response.data);
  });

  // const [slideIndex, setslideIndex] = useState<number>(0);
  return (
    <div
      className="Hero relative bg-bgColorBlack"
      style={{ minHeight: "calc(100vh - 70.94px)" }}
    >
      {/* <HeroSlider slideIndex={slideIndex} setslideIndex={setslideIndex} /> */}
      <div
        className="flex
         w-[300vw]  text-[white] duration-500"
        // style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        <HeroProduct />
        <HeroProduct />
        <HeroProduct />
      </div>
    </div>
  );
}
