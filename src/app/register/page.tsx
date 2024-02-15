import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="flex">
        <div
          className="h-full w-1/2"
          style={{
            minHeight: "calc(100vh - 70.94px)",
            backgroundImage: `url(/${"register-bg.png"})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            minHeight: "calc(100vh - 70.94px)",
          }}
          className="flex h-full w-1/2 flex-col  justify-center px-6"
        >
          <p className="text-xl font-bold">Sign Up</p>
          <p>Sign up for free to access to in any of our products </p>
          <button className="my-2 flex w-full justify-center gap-2 rounded-xl   border-2 border-mainColor py-2 text-mainColor">
            <Image src="/Google.svg" alt="google" width={20} height={20} />
            <p>Continue With Google</p>
          </button>
          <button className="my-2 flex w-full justify-center gap-2 rounded-xl   border-2 border-mainColor py-2 text-mainColor">
            <Image src="/Google.svg" alt="google" width={20} height={20} />
            <p>Continue With Google</p>
          </button>
          <button>Continue With Google</button>
          <form action="" className="flex flex-col ">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              className="mt-1 rounded-lg border-2 py-2 pl-2 focus:outline-none"
            />
            <label htmlFor="email" className="mb-4 mt-1 text-bgColorDanger">
              Error
            </label>
            <div className="flex justify-between">
              <label htmlFor="email" className="text-bgColorDanger">
                Password
              </label>
              <div className="mr-2 flex cursor-pointer gap-2 text-lg opacity-60">
                <FaEyeSlash />
              </div>
            </div>
            <input
              type="email"
              id="email"
              className="mt-1 rounded-lg border-2 py-2 pl-2 focus:outline-none"
            />
            <label htmlFor="email" className="mb-4 mt-1 text-bgColorDanger">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </label>
            <button className="mx-auto w-fit bg-mainColor px-3 py-2 text-xl font-bold text-white">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
