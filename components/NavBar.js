import { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    //Manejamos su ciclo de vida
    useEffect(() => {
        const handleScroll = () => {
            //Si el desplazamiento vertical es mayor a 50, setea el estado en true, sino en false
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }
        //Escucho el evento de desplazamiento
        window.addEventListener('scroll', handleScroll);
        return () => {
            //Limpio el oyente de eventos cuando el componente se desmonta
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    //Manejamos la lógica de implementación del scroll con un ternario en una variable
    const navbarClasses = `navbar navbar-expand-lg navbar-dark custom-bg-color ${isScrolled ? "fixed-navbar" : ""}`;

    return (
        <nav className={navbarClasses}>
            <div className="container neon-effect">
                <Link href="/" className="link">
                    <div className="navbar-brand" >My Portfolio</div>
                </Link>
                {/* menu hamburguesa responsive */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/about" className="link">
                                <div className="nav-link" >About</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services" className="link">
                                <div className="nav-link" >Services</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="link">
                                <div className="nav-link" >Blog</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/more" className="link">
                                <div className="nav-link" >More</div>
                            </Link>
                        </li>
                    </ul>
                    <button type="button" className="navbar-text btn btn-outline-success custom-btn">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;