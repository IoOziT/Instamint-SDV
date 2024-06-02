import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col flex-1">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
