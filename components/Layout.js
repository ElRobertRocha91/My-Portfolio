import Footer from "./Footer";
import NavBar from "./NavBar";

export const metadata = {
    title: "Roberto Rocha Portfolio"
}

const Layout = ({ children }) => (
    <>
        <NavBar/>
        <main className="container-fluid bg-black min-vh-100">
            {children}
        </main>
        <Footer/>
    </>
)

export default Layout;