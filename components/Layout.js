import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => (
    <>
        <NavBar/>
        <main className="container-fluid bg-dark min-vh-100">
            {children}
        </main>
        <Footer/>
    </>
)

export default Layout;