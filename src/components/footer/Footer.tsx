import Link from "next/link";
import HeaderLeft from "../header/HeaderLeft";
import { FaApplePay, FaCcVisa } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bgColorBlack text-center">
      <div className="container flex flex-wrap justify-between py-12 border-b-2">
        <div className="flex w-[30%] flex-col gap-2 text-white">
          <div className="mx-auto">
            <HeaderLeft />
          </div>
          <p className="opacity-30 hover:opacity-100 duration-1000">Customer Supports:</p>
          <p>(629) 555-0129</p>
          <p className="opacity-30 hover:opacity-100 duration-1000 ">4517 Washington Ave.</p>
          <p className="opacity-30 hover:opacity-100 duration-1000 ">Manchester, Kentucky 39495</p>
          <p>info@kinbo.com</p>
        </div>
        <div className="flex w-[30%] flex-col gap-2 text-white">
          <p>Quick Links</p>
          <Link href="" className="opacity-30 hover:opacity-100 duration-1000 cursor-pointer">New Arrivals</Link>
          <Link href="" className="opacity-30 hover:opacity-100 duration-1000 cursor-pointer">Phones</Link>
          <Link href="" className="opacity-30 hover:opacity-100 duration-1000 cursor-pointer">Daily</Link>
        </div>
        <div className="flex w-[30%] flex-col gap-2 text-white">
          <p>Settings</p>
          <Link href="" className="opacity-30 hover:opacity-100 duration-1000 cursor-pointer">My Account</Link>
          <Link href="" className="opacity-30 hover:opacity-100 duration-1000 cursor-pointer">Shoping Cart</Link>
          <Link href="" className="opacity-30 hover:opacity-100 duration-1000 cursor-pointer">Wishlist</Link>
        </div>
      </div>
      <div className="container py-6 text-white flex justify-between">
        <p className="opacity-30 hover:opacity-100 duration-1000">SwiftBuy eCommerce © {new Date().getFullYear()}. All Rights Reserved</p>
        <div className="flex gap-2 text-3xl">
            <Image src="/Method=Visa.png" alt="/Method=Visa.png" width={41.98} height={31.97}/>
            <Image src="/Method=Mastercard.png" alt="Mastercard.png" width={40.97} height={38.97}/>
            <Image src="/Method=ApplePay.png" alt="ApplePay.png" width={42.97} height={34.97}/>
        </div>
      </div>
    </footer>
  );
}
