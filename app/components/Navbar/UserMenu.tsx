"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

const UserMenu = ({ currentUser }: { currentUser?: User | null }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative text-black">
      <div className="flex flex-row items-center gap-3">
        <div
          className="p-2 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer  hover:bg-neutral-100/25"
          onClick={toggleOpen}
        >
          <AiOutlineMenu size={28} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute shadow-md rounded-xl border-[1px] border-neutral-200/50 w-[40vw] md:w-[20vw] bg-neutral-300/[40%] backdrop-blur-md overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer backdrop-blur-md">
            <>
              {currentUser ? (
                <>
                  <MenuItem onClick={() => signOut()} label="Logout" />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label="Login" />
                  <MenuItem onClick={registerModal.onOpen} label="Signup" />
                </>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
