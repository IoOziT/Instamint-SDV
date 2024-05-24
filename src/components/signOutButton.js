"use client";

import { signOut } from "@/api/auth";

export const SignOutButton = () => {
	const handleClick = () => {
		signOut();
	};
	//Replace button with Button component
	return <button onClick={handleClick}>Sign Out</button>;
};
