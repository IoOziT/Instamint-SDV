import Navbar from "@/components/layout/admin/navbar"

const sectionTitle = "Admin panel"

/**
 *
 * @param {Object} props
 * @param {import("next").ResolvingMetadata} parent
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata(_props, parent) {
  const baseTitle = (await parent).title

  return {
    ...parent,
    title: baseTitle ? `${baseTitle} | ${sectionTitle}` : sectionTitle,
  }
}

/**
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-1">{children}</div>
    </div>
  )
}

export default Layout
