import Navbar from "../components/layout/navbar.js";
import Footer from "../components/layout/footer.js";
import "./globals.css";
const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
