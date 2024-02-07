"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCartShopping } from "react-icons/fa6";
import HeroProduct from "./HeroProduct";
import HeroSlider from "./HeroSlider";

import axios from "axios";
import { useSelector } from "react-redux";



export default function Hero() {
  const products = useSelector(state => state.products.products)
  useEffect(() => {
  
  })


  const [slideIndex, setslideIndex] = useState<number>(0);
  return (
    <div className="Hero relative bg-bgColorBlack" style={{ minHeight: "calc(100vh - 70.94px)" }}>
      <HeroSlider slideIndex={slideIndex} setslideIndex={setslideIndex} />
      <div
        className="flex
         w-[300vw]  text-[white] duration-500"
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        <HeroProduct />
        <HeroProduct />
        <HeroProduct />
      </div>

    </div>
  );
}
