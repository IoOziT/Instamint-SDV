import Navbar from "@/components/layout/navbar";
import "../globals.css";
import Footer from "@/components/layout/footer";

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
    <>
      <div className="flex flex-col flex-1">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
