"use client"

import i18next from "i18next"
import ICU from "i18next-icu"
import HttpBackend from "i18next-http-backend"
import { I18nextProvider, initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { defaultNS, fallbackLng, languages } from "./settings"

/**
 * @type {import("i18next").i18n | undefined}
 */
let i18nInstance = undefined

/**
 *
 * @param {import("i18next").i18n} i18nInstance - The i18n instance to set up
 * @param {import("i18next").InitOptions} [options] - The options to pass to the `init` function of the i18n instance
 * @returns The i18n instance, set up
 */
function setupI18n(i18nInstance, options) {
  i18nInstance
    .use(ICU)
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...options,
      supportedLngs: languages,
      fallbackLng,
      defaultNS,
      ns: defaultNS,
      detection: {
        order: ["path", "htmlTag", "cookie", "navigator"],
      },
      backend: {
        loadPath: `${process.env.__NEXT_PRIVATE_ORIGIN ?? ""}/locales/{{lng}}/{{ns}}.json`,
      },
    })

  return i18nInstance
}

/**
 *
 * @param {string} [lng]
 * @returns
 */
export function getI18n(lng) {
  if (typeof window === "undefined") {
    return setupI18n(i18next.createInstance(), { lng })
  } else {
    if (!i18nInstance) i18nInstance = setupI18n(i18next)
    return i18nInstance
  }
}

/**
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {string} [props.lng] - If set, overrides the language detection
 */
export const I18nProvider = ({ children, lng }) => {
  const i18n = getI18n(lng)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
