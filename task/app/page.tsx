"use client";
import Timer from "./components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white bg-black/[15%] h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        alt="image"
        src={"/wallpaper1.jpg"}
        width={3000}
        height={3000}
        className="w-full h-screen fixed top-0 left-0 z-[-1] object-cover"
      />
      <Timer />
    </main>
  );
}
