"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Image
        src={"/logo.png"}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height={150}
        width={150}
      />
    </>
  );
};

export default Logo;
