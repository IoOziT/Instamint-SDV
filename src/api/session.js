import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import authConfig from "./auth.config";

export const getCurrentMinters = async () => {
	const cookie = cookies().get(authConfig.security.userSession.cookie.name);

	if (!cookie) {
		return null;
	}

	const user = jsonwebtoken.decode(cookie.value)?.payload?.user;

	if (!user?.id) {
		return null;
	}

	return user;
};
