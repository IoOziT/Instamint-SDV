import "../globals.css";

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
    <div className="w-full">
      <Navbar />
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default Layout;
