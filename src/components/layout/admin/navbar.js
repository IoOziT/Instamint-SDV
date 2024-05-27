"use client";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="bg-white p-6 w-full">
			<div className="flex justify-between items-center">
				<span className="flex items-center gap-3 text-white ">
					<Image
						alt="Logo Instamint"
						src="/assets/logo-instamint.png"
						width={35}
						height={35}
					/>
					<p className="text-3xl text-black"> |</p>
					<p className="font-semibold text-black text-xl">INSTAMINT</p>
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
