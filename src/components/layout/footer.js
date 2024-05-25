"use client";
import { FiHome } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { LuFlower } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 absolute bottom-0 p-6 w-full">
      <div className="flex justify-between lg:mx-24 md:mx-16">
        <Link href={"#"}>
          <FiHome className="text-gray-300 h-6 w-6 hover:text-limeGreen" />
        </Link>
        <Link href={"#"}>
          <IoSearch className="text-gray-300 h-6 w-6 hover:text-limeGreen" />
        </Link>
        <Link href={"#"}>
          <LuFlower className="text-gray-300 h-6 w-6 hover:text-limeGreen" />
        </Link>
        <Link href={"#"}>
          <FaRegHeart className="text-gray-300 h-6 w-6 hover:text-limeGreen" />
        </Link>
        <Link href={"#"}>
          <FaRegUser className="text-gray-300 h-6 w-6 hover:text-limeGreen" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
