import wallpaper from "@/public/wallpaper1.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image src={wallpaper} className="w-full h-screen fit-cover" alt="" />
    </div>
  );
}
