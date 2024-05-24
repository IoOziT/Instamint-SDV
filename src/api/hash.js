"use server";

import * as bcrypt from "bcryptjs";

const saltRounds = parseInt(process.env.SALT_ROUNDS_PASSWORD);

if (!saltRounds) {
	throw new Error("SALT_ROUNDS_PASSWORD not found in .env file");
}

export const hashPassword = async password => {
	return await bcrypt.hash(password, saltRounds);
};

export const compareHash = async (plainPassword, hashedPassword) => {
	const x = await bcrypt.compare(plainPassword, hashedPassword);
	return x;
};
