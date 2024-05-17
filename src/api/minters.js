"use server";

import { getKnex } from "./db";
import Minters from "./db/models/MintersModel";
import { ErrorCode } from "./errors";
import { hashPassword } from "./hash";

export const registerMinters = async ({ email, password }) => {
	await getKnex();
	const emailExists = await isEmailMintersExists(email);

	if (emailExists) {
		throw new Error(ErrorCode.EmailAlreadyExists);
	}

	const user = await Minters.query().insert({
		email,
		password: await hashPassword(password),
		is_public: false,
		type: "minters",
	});

	return {
		id: user.id,
		email: user.email,
	};
};

export const isEmailMintersExists = async email => {
	const count = await Minters.query().where({ email });
	return count.length > 0;
};
