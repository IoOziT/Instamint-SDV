import "./globals.css";

import { dir } from "i18next";

import { I18nProvider } from "@/lib/i18n/index.js";

import Footer from "@/components/layout/footer.js";
import Navbar from "@/components/layout/navbar.js";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
	title: "Instamint",
	description: "The new social network for NFT enjoyers",
};

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 * @param {object} props.params - The route params
 * @param {string} [props.params.lng] - The user language
 */
const Layout = ({ children }) => {
	const lng = navigator.language || "en";
	return (
		<html lang={lng} dir={dir(lng)}>
			<body>
				<I18nProvider lng={lng}>
					<div className="min-h-screen flex flex-col">
						<Navbar />
						<main className="flex flex-1">{children}</main>
						<Footer />
					</div>
				</I18nProvider>
			</body>
		</html>
	);
};

export default Layout;
