import "../globals.css"

import { dir } from "i18next"

import { I18nProvider } from "@/lib/i18n/index.js"

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Instamint",
  description: "The new social network for NFT enjoyers",
  applicationName: "Instamint",
}

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {object} props.params - The route params
 * @param {string} props.params.lng - The user language
 */
const Layout = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <I18nProvider lng={lng}>
          <div className="min-h-screen flex flex-col">
            <main className="flex flex-1">{children}</main>
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}

export default Layout
