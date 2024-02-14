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
          className="flex h-full w-1/2 flex-col  justify-center"
        >
          <p>Sign Up</p>
          <p>Sign up for free to access to in any of our products </p>
          <button className="flex gap-2">
            <Image src="/Google.svg" alt="google" width={30} height={30} />
            <p>Continue With Google</p>
          </button>
          <button>Continue With Google</button>
          <form action="" className="flex flex-col ">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" />
            <label htmlFor="email" className="text-bgColorDanger">
              error
            </label>

            <label htmlFor="password">Password : </label>
            <input type="password" id="email" />
          </form>
        </div>
      </div>
    </>
  );
}
