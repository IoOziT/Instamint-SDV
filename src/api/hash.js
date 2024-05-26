"use server";

import * as bcrypt from "bcryptjs";
import cryptoRandomString from "crypto-random-string";
import Minters from "./db/models/mintersModel";

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

export const createResetPasswordToken = async () => {
	let token;
	let tokenExists = true;

	while (tokenExists) {
		token = cryptoRandomString({ length: 32, type: "url-safe" });

		// Check if the token already exists in the database
		const existingToken = await Minters.query().findOne({
			reset_password_token: token,
		});
		tokenExists = existingToken !== undefined;
	}

	return token;
};
