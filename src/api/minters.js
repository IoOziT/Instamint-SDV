"use server";

import { redirect } from "next/navigation";
import { getKnex } from "./db";
import Minters from "./db/models/mintersModel";
import { ErrorCode } from "./errors";
import { hashPassword } from "./hash";

export const registerMinters = async ({
	email,
	password,
	phoneNumber,
	isPublic,
}) => {
	await getKnex();
	const emailExists = await isEmailMintersExists(email);

	if (emailExists) {
		throw new Error(ErrorCode.EmailAlreadyExists);
	}

	const user = await Minters.query().insert({
		email,
		password: await hashPassword(password),
		is_public: isPublic,
		phone: phoneNumber,
		type: "minters",
	});

	if (!user) {
		throw new Error(ErrorCode.InvalidRegisterPayload);
	}

	redirect("/login");
};

export const isEmailMintersExists = async email => {
	const count = await Minters.query().where({ email });
	return count.length > 0;
};
