import { languages } from "@/lib/i18n/settings";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentMinters } from "./api/session";

acceptLanguage.languages(languages);

export const config = {
	matcher: [
		"/((?!api|_next/(?:static|images)|assets|locales|(?:.*.(?:svg|png|jpeg))|favicon.ico|sw.js).*)",
	],
};

const publicPathname = ["/login", "/register", "/resetPassword"];

const checkAuth = async (req, url) => {
	const pathname = url.pathname;
	console.log(pathname);
	const isPublic = publicPathname.some(path => pathname.includes(path));

	const user = await getCurrentMinters();

	if (isPublic && user) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	if (!isPublic && !user) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
};

/**
 *
 * @param {NextRequest} req
 * @returns
 */
export function middleware(req) {
	const url = req.nextUrl.clone();
	const authChecked = checkAuth(req, url);

	if (authChecked) {
		return authChecked;
	}
}
