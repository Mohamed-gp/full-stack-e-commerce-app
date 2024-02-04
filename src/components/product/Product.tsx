"use client";
import Image from "next/image";
import { FaCartShopping, FaHeart, FaRegHeart } from "react-icons/fa6";
import RatingStars from "../ratingstars/RatingStars";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Product() {
  const [wishList, setwishList] = useState<boolean>(false);
  const [animate, setanimate] = useState<string>("");
  const addWishListHandler = () => {
    setwishList(!wishList);
    toast.success("Product Added To WishList Successfully");
  };

  // todo;
  // my try
  // const cart = document.querySelector(".cart-icon");
  // const product =
  //   e.currentTarget.parentElement.parentElement.parentElement.children[0]
  //     .children[0];

  // let flyToCart = document.createElement("img");
  // flyToCart.style.position = "fixed";
  // flyToCart.className = "fly-to-cart";
  // flyToCart.src = product.src; // Copy the content of the product

  // product.parentElement.appendChild(flyToCart);
  // const xDistance =
  //   cart.getBoundingClientRect().x - flyToCart.getBoundingClientRect().x;
  // const yDistance =
  //   cart.getBoundingClientRect().y - flyToCart.getBoundingClientRect().y;
  // console.log(cart.getBoundingClientRect());
  // const animation = `
  //     @keyframes flyToCartAnimation {
  //       0% {
  //         left: 0;
  //         width: 100%;
  //         opacity: 1;
  //       }
  //       100% {
  //         left : ${cart.getBoundingClientRect().x}px;
  //         width: 10%;
  //         opacity: 0.5;
  //       }
  //     }
  //   `;
  // setanimate(animation);

  // flyToCart.style.animation = "flyToCartAnimation 1s ease-in-out";

  // setTimeout(() => {
  //   flyToCart.remove(); // Remove the fly-to-cart element after the animation
  //   setanimate(""); // Remove the fly-to-cart element after the animation
  // }, 1000);
  const addProductHandler = (e) => {
    //indian indian indian indian indian indian
    const cart = document.querySelector(".cart-icon");

    const product =
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .children[0].children[0];
    // finding first grand parent of target button
    let target_parent = e.target.parentNode;
    // target_parent.style.zIndex = "100";
    // Creating separate Image
    // let img = target_parent.querySelector('img');
    let flying_img = product.cloneNode();
    flying_img.classList.add("flying-img");
    flying_img.style.zIndex = "5";

    target_parent.appendChild(flying_img);
    // Finding position of flying image
    console.log(flying_img);
    const flying_img_pos = flying_img.getBoundingClientRect();
    const shopping_cart_pos = cart.getBoundingClientRect();

    let data = {
      left:
        shopping_cart_pos.left -
        (shopping_cart_pos.width / 2 +
          flying_img_pos.left +
          flying_img_pos.width / 2),
      top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30,
    };

    flying_img.style.cssText = `
                              --left : ${data.left.toFixed(2)}px;
                              --top : ${data.top.toFixed(2)}px;
                              `;

    setTimeout(() => {
      // target_parent.style.zIndex = "";
      target_parent.removeChild(flying_img);
    }, 2000);
  };

  return (
    <>
      <div
        className="flex flex-col "
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="serbas relative  flex h-[150px] w-[270px] items-center justify-center   rounded-t-xl bg-white">
          <div className="img">
            <Image
              src="/618d5bS2lUL._AC_SX466_-removebg-preview.png"
              alt="618d5bS2lUL._AC_SX466_-removebg-preview.png"
              width={120}
              height={120}
            />
          </div>
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

          <div className=" absolute h-[149px] w-[269px] overflow-hidden">
            <div className="absolute -left-[28px] -top-[3px]  flex h-10 w-[87px] -rotate-45 items-center justify-center bg-bgColorDanger text-xs  text-white ">
              99%
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-b-xl bg-bgColorBlack px-2 leading-loose text-white">
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
            <button
              onClick={(e) => addProductHandler(e)}
              className="flex w-[100px] items-center justify-center gap-1 rounded-lg bg-mainColor  px-1 py-1 text-white"
            >
              <p>Add To Cart</p>
              <FaCartShopping />
            </button>
            <button className="w-[100px] rounded-lg bg-white px-1 py-1 text-[#201F20]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
