import Image from "next/image";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="flex">
        <div
          className="h-full w-1/2"
          style={{
            minHeight: "calc(100vh - 70.94px)",
            backgroundImage: `url(/${"purple-wallpaper-with-swirly-background.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            minHeight: "calc(100vh - 70.94px)",
            boxShadow: "rgb(255 255 255 / 30%) 0px 0px 74px 55px",
          }}
          className="flex h-full w-1/2 flex-col  justify-center px-6"
        >
          <p className="text-xl font-bold">Sign In</p>

          <button className="my-2 flex w-full justify-center gap-2 rounded-xl   border-2 py-2 text-mainColor">
            <Image src="/Google.svg" alt="google" width={20} height={20} />
            <p>Continue With Google</p>
          </button>
          <div className="or-sign-up relative my-2 text-center  ">
            <span className="relative z-20 mx-auto  bg-white px-2 font-bold">
              OR
            </span>
          </div>
          <form action="" className="flex flex-col">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              className="mb-2 mt-1 rounded-lg border-2 py-1 pl-2 focus:outline-none"
            />
            <div className="flex justify-between">
              <label htmlFor="email" className="">
                Password
              </label>
              <div className="mr-2 flex cursor-pointer gap-2 text-lg opacity-60">
                <FaEyeSlash />
              </div>
            </div>
            <input
              type="password"
              id="password"
              className="mb-2 mt-1 rounded-lg border-2 py-2 pl-2 focus:outline-none"
            />
            <span className="mb-2 mt-1 text-center text-bgColorDanger opacity-50">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
            <button className="mx-auto w-fit rounded-xl bg-mainColor px-6 py-2 text-xl font-bold text-white">
              Sign Up
            </button>
            <div className="mt-2 flex items-center justify-center gap-2">
              <p className="opacity-50">Don't Have An Account ? </p>
              <Link href="/register" className="text-mainColor underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default page;
