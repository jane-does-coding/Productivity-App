"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

import { RiTimerLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-full lg:w-[50vw] lg:rounded-full ml-0 lg:ml-[25vw] bg-neutral-100/[35%] z-10 top-4 p-2 backdrop-blur-md gap-8">
      <div className="flex flex-row items-center justify-center gap-3 ">
        <div className="p-2 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-100/25">
          <SlNotebook size={28} />
        </div>
        <div className="p-2 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-100/25">
          <LuListTodo size={28} />
        </div>
        <div className="p-2 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-100/25">
          <RiTimerLine size={28} />
        </div>
        <div className="p-2 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-100/25">
          <IoSettingsOutline size={28} />
        </div>
        <UserMenu currentUser={currentUser} />
      </div>
    </nav>
  );
};

export default Navbar;
