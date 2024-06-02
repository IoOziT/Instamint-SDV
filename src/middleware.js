import acceptLanguage from "accept-language"
import { NextRequest, NextResponse } from "next/server"

import { fallbackLng, languages, cookieName } from "@/lib/i18n/settings"
import { getCurrentMinters } from "./api/session"
import routes from "./routes"

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/(?:static|images)|assets|locales|(?:.*.(?:svg|png|jpeg))|favicon.ico|sw.js).*)"],
}

/**
 *
 * @param {NextRequest} req
 * @returns {string}
 */
function getNewPath(req) {
  const loggerUser = getCurrentMinters()
  const knownLanguage = languages.find((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))
  const knownLanguagePrefix = knownLanguage ? `/${knownLanguage}` : ""

  if (req.nextUrl.pathname.startsWith("/_next")) {
    return req.nextUrl.pathname
  }

  if (!loggerUser && !req.nextUrl.pathname.match(new RegExp(`${knownLanguagePrefix}/auth`))) {
    return knownLanguagePrefix + routes.auth.login
  }

  if (!loggerUser || !loggerUser.isAdmin) {
    return knownLanguagePrefix + routes.home
  }

  return req.nextUrl.pathname
}

/**
 *
 * @param {NextRequest} req
 * @returns
 */
export function middleware(req) {
  let lng
  const newPath = getNewPath(req)

  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  }

  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language")) ?? fallbackLng
  }

  // Redirect if lng in path is not supported
  if (!languages.some((loc) => newPath.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.redirect(new URL(`/${lng}${newPath}`, req.url))
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()

    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer)
    }

    return response
  }

  return NextResponse.next()
}
