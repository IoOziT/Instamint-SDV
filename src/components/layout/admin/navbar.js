"use client";
import Image from "next/image";
import { FaComments } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiNftFill } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";
import { PiTeaBagFill } from "react-icons/pi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-6 w-full border-b-2 border-black mb-4">
      <div className="flex justify-between items-center">
        <Link className="flex items-center gap-3 text-white " href={"/admin"}>
          <Image
            alt="Logo Instamint"
            src="/assets/logo-instamint.png"
            width={35}
            height={35}
          />
          <p className="text-3xl text-black"> |</p>
          <p className="font-semibold text-black text-xl">INSTAMINT (admin) </p>
        </Link>
        <span className="flex gap-3">
          <Link
            href={"/admin/comments"}
            className="hover:text-slate-300 flex flex-col items-center"
          >
            <FaComments className="h-6 w-6" /> Comments
          </Link>
          <Link
            href={"/admin/dashboard"}
            className="hover:text-slate-300 flex flex-col items-center"
          >
            <IoIosStats className="h-6 w-6" /> Dashboard
          </Link>
          <Link
            href={"/admin/minters"}
            className="hover:text-slate-300 flex flex-col items-center"
          >
            <FaUser className="h-6 w-6" /> Minters
          </Link>
          <Link
            href={"/admin/nfts"}
            className="hover:text-slate-300 flex flex-col items-center"
          >
            <RiNftFill className="h-6 w-6" /> NFTs
          </Link>
          <Link
            href={"/admin/report"}
            className="hover:text-slate-300 flex flex-col items-center"
          >
            <TbMessageReport className="h-6 w-6" /> Reports
          </Link>

          <Link
            href={"/admin/teabags"}
            className="hover:text-slate-300 flex flex-col items-center"
          >
            <PiTeaBagFill className="h-6 w-6" /> Teabag
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
