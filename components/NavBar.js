import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

    //Funcionalidad al button Contact
    const router = useRouter();

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
                <div className="collapse navbar-collapse text-center" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/about" className="link nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services" className="link nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="link nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/more" className="link nav-link">
                                More
                            </Link>
                        </li>
                    </ul>
                    <button type="button" 
                    onClick={() => router.push('/more')}
                    className="navbar-text btn btn-outline-success custom-btn">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;