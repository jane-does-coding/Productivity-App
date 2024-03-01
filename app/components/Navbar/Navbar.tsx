"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

import { RiTimerLine } from "react-icons/ri";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-full lg:w-[50vw] lg:rounded-full ml-0 lg:ml-[25vw] bg-neutral-100/25 z-10 top-4 p-2 backdrop-blur-md">
      <div className="">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-0">
            <div className="p-2 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-100/25">
              <RiTimerLine size={28} />
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
