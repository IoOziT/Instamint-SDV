import "../globals.css"

import { dir } from "i18next"

import { languages } from "@/lib/i18n/settings"
import { I18nProvider } from "@/lib/i18n/index.js"

import Footer from "../components/layout/footer.js"
import Navbar from "../components/layout/navbar.js"

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Instamint",
  description: "The new social network for NFT enjoyers",
}

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {object} props.params - The route params
 * @param {string} [props.params.lng] - The user language
 */
const Layout = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <I18nProvider lng={lng}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}

export default Layout
