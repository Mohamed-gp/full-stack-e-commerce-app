import Image from "next/image";

export default function page() {
  return (
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
      <button className="mt-6 rounded-xl bg-mainColor px-6 py-1 text-white">
        Continue Shoping
      </button>
    </div>
  );
}
