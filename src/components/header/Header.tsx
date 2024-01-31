import Link from "next/link";
import {} from "react-icons/bs";
import {
  FaCartShopping,
  FaHeart,
  FaUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-white text-black">
      <div className="container flex items-center justify-between ">
        <Link href="/">Ecommerce</Link>
        <div className="rounded-2xl border-2 border-solid px-2 py-2">
          <FaMagnifyingGlass />
          <input
            type="text"
            className="w-[300px] focus:outline-none pl-3"
            placeholder="Search for products, categories or brands..."
          />
          <button className="h-full">Search</button>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <FaHeart />
            </div>
            <p>Wishlist</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <FaUser />
            </div>
            <p>Acoount</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <FaCartShopping />
            </div>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </header>
  );
}
