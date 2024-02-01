import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

export default function HeroProduct() {
  return (
    <div
    className="container flex h-full w-[100vw] flex-col-reverse flex-wrap items-center justify-center gap-2 gap-y-6 py-12 lg:flex-row lg:justify-between"
    style={{ minHeight: "calc(100vh - 70.94px)" }}
  >
    <div className="w-full  text-center leading-loose lg:w-1/2 lg:text-left">
      <p className="mb-2 text-5xl font-bold">MacBook Pro 16</p>
      <p className="opacity-60">
        The MacBook 16 redefines creative potential. Experience raw power
        with the M1 Max chip, witness breathtaking visuals on the Liquid
        Retina XDR display, and stay unplugged for an astonishing 21
        hours. Render complex projects, edit high-resolution video, and
        push your imagination further than ever before. This isn't just a
        laptop, it's a creative powerhouse waiting to be unleashed.
      </p>
      <div className="my-2">
        <div className="text-red-600 relative mx-auto w-fit text-3xl lg:mx-0">
          $3,999
          <del className="text-white absolute bottom-0 left-full text-sm">
            $4200
          </del>
        </div>
        <p className="text-sm opacity-60">
          Don't miss this limited time offer.
        </p>
      </div>
      <div className="my-6 flex items-center justify-center gap-3 font-bold lg:justify-normal">
        <button className="bg-white w-[150px] rounded-lg px-3 py-1 text-[#201F20]">
          Read More
        </button>
        <button className="bg-white  flex w-[150px] items-center gap-1 rounded-lg px-3 py-1 text-[#201F20]">
          <p>Add To Cart</p>
          <FaCartShopping />
        </button>
      </div>
    </div>
    <Image
      src="/618d5bS2lUL._AC_SX466_-removebg-preview.png"
      alt=""
      width={400}
      height={400}
    />
  </div>
  )
}