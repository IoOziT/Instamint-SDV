import "./globals.css";



import Navbar from "@/components/layout/admin/navbar.js";

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
	return (
		<html >
			<body>
					<div className="min-h-screen flex flex-col">
						<Navbar />
						<main className="flex flex-1">{children}</main>
					</div>
			</body>
		</html>
	);
};

export default Layout;
