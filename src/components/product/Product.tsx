"use client";
import Image from "next/image";
import { FaCartShopping, FaHeart, FaRegHeart } from "react-icons/fa6";
import RatingStars from "../ratingstars/RatingStars";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Product() {
  const [wishList, setwishList] = useState<boolean>(false);
  const addWishListHandler = () => {
    setwishList(!wishList);
    toast.success("Product Added To WishList Successfully");
  };
  return (
    <div className="flex flex-col "  data-aos="fade-up" data-aos-duration="1000" >
      <div className="relative flex h-[150px] w-[270px] items-center justify-center overflow-hidden rounded-t-xl bg-white">
        <Image
          src="/618d5bS2lUL._AC_SX466_-removebg-preview.png"
          alt="618d5bS2lUL._AC_SX466_-removebg-preview.png"
          width={120}
          height={120}
        />
        <div className="absolute right-4 top-4 ">
          {wishList ? (
            <div
              className="cursor-pointer text-[red]"
              onClick={() => setwishList(!wishList)}
            >
              <FaHeart />
            </div>
          ) : (
            <div
              className="cursor-pointer"
              onClick={() => addWishListHandler()}
            >
              <FaRegHeart />
            </div>
          )}
        </div>

        <div className="bg-bgColorDanger absolute -left-[81px]  -top-[5px] flex h-10 w-[200px] -rotate-45 items-center justify-center text-xs  text-white ">
          99%
        </div>
      </div>
      <div className="bg-bgColorBlack flex items-center justify-between rounded-b-xl px-2 leading-loose text-white">
        <div className="left px-2 py-3">
          <p className="text-sm font-bold">MacBook Pro 16</p>
          <div className="rating-container my-1">
            <RatingStars />
          </div>
          <div className="relative mx-0 w-fit text-base font-bold text-red-600">
            $3,999
            <del className="absolute bottom-0 left-full text-xs text-white">
              $4200
            </del>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-xs font-bold lg:justify-normal">
          <button className="flex w-[100px] items-center justify-center gap-1 rounded-lg bg-mainColor  px-1 py-1 text-white">
            <p>Add To Cart</p>
            <FaCartShopping />
          </button>
          <button className="w-[100px] rounded-lg bg-white px-1 py-1 text-[#201F20]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
