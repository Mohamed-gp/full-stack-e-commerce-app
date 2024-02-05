"use client";
import Image from "next/image";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function page() {
  const [state, setstate] = useState<boolean>(true);
  return (
    <>
      {state ? (
        <div>
          <p className="my-6 text-center text-xl font-bold">My Shopping Cart</p>
          <table className="mb-24 mt-12 w-screen ">
            <thead className="bg-mainColor py-2 text-white">
              <tr className="">
                <th>Product Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quanity</th>
                <th>Subtotal</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="relative">
                <td>
                  <div className="mx-auto w-fit">
                    <Image
                      src="/618d5bS2lUL._AC_SX466_-removebg-preview.png"
                      alt="mac"
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                <td>
                  <p>MacBook Pro 16</p>
                </td>
                <td>$3990</td>
                <td>2</td>
                <td>${3990 * 2}</td>
                <td>
                  <div className="mx-auto w-fit cursor-pointer text-3xl text-bgColorDanger">
                    <FaXmark />
                  </div>
                </td>
              </tr>
              <tr className="relative">
                <td>
                  <div className="mx-auto w-fit">
                    <Image
                      src="/618d5bS2lUL._AC_SX466_-removebg-preview.png"
                      alt="mac"
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                <td>
                  <p>MacBook Pro 16</p>
                </td>
                <td>$3990</td>
                <td>2</td>
                <td>${3990 * 2}</td>
                <td>
                  <div className="mx-auto w-fit cursor-pointer text-3xl text-bgColorDanger">
                    <FaXmark />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div
            className="container flex flex-col  items-center justify-center py-14"
            style={{ minHeight: `calc(100vh - 70.94px)` }}
          >
            <Image
              src="/cart-empty-photo.png"
              alt="cart-empty"
              width={300}
              height={300}
            />
            <p className="my-6 mb-2 text-3xl font-bold">
              Your cart is empty and sad :(
            </p>
            <p className="opacity-60">Add something to make it happy!</p>
            <button className="mt-6 rounded-xl bg-mainColor px-6 py-2  text-white">
              Continue Shoping
            </button>
          </div>
        </>
      )}
    </>
  );
}
