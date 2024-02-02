import Image from "next/image";
import Link from "next/link";
import { FaBagShopping, FaShop, FaStore } from "react-icons/fa6";

export default function HeaderLeft() {
  return (
    <Link href="/" className="text-base sm:text-xl font-bold flex  items-center gap-1">
      {/* <Image src="/logo-symbol.png" alt="logo" width={20} height={20}/> */}
      <span className="flex items-center justify-center text-white bg-mainColor p-2  rounded-xl text-lg">
        <FaBagShopping/>  
      </span>
      SwiftBuy
    </Link>
  );
}
