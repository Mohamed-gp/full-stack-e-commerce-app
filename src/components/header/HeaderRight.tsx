"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";

export default function HeaderRight() {
  return (
    <div className="flex items-center justify-between gap-3 text-sm md:text-lg ">
      <Link href="/profile/:id" className=" md:text-xl ">
        <FaUser />
      </Link>
      <div className="border-r-2 py-2 pr-3 ">
        <Link href="/wishlist" className=" md:text-xl ">
          <FaHeart />
        </Link>
      </div>
      <Link href="/cart" className="cart-icon md:text-xl">
        <FaCartShopping />
      </Link>
    </div>
  );
}
