import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => (
    <>
        <NavBar/>
        <main className="container-fluid py-4 bg-dark min-vh-100">
            {children}
        </main>
        <Footer/>
    </>
)

export default Layout;