"use client";
import Image from "next/image";
import { LuBell } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-gray-800  absolute top-0 p-6 w-full">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-3 text-white ">
          <Image
            alt="Logo Instamint"
            src="/assets/logo-instamint.png"
            width={35}
            height={35}
          />
          <p className="text-3xl m"> |</p>
          <p className="font-semibold text-xl">INSTAMINT</p>
        </span>
        <LuBell className="text-gray-300 h-7 w-7 hover:text-limeGreen" />
      </div>
    </nav>
  );
};

export default Navbar;
