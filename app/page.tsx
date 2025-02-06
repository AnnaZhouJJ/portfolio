import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-red-100 m-96">
      <h1>Hello I'm Anna Zhou.</h1>
      <h2>I'm a ui/ux designer!</h2>
      {/* <Link href={"/about"}>Click here to go to About</Link> */}
    </div>
  );
}
