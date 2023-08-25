import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => (
    <>
        <NavBar/>
        <main className="container py-4 bg-dark">
            {children}
        </main>
        <Footer/>
    </>
)

export default Layout;