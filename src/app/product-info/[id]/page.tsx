import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="container flex h-screen justify-between py-12">
        <div className="">
          <div>
            <Image src="" alt="" width={200} height={200} />
          </div>
          <div className="flex gap-2">
            <Image src="" alt="" width={200} height={200} />
            <Image src="" alt="" width={200} height={200} />
            <Image src="" alt="" width={200} height={200} />
            <Image src="" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="flex flex-col">
          <p>Coach</p>
          <p>macBook</p>
          <p>macBook</p>
          <p>macBook</p>
          <div>
            <p>$200</p>
          </div>
        </div>
      </div>
    </div>
  );
}
