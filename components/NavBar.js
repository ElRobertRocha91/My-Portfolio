'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
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
        <Navbar collapseOnSelect expand="lg" className={navbarClasses}>
            <div className="container neon-effect">
                <Navbar.Brand  as="a" href="https://github.com/ElRobertRocha91" target="_black" rel="noopener noreferrer">My Portfolio</Navbar.Brand>
                {/* menu hamburguesa responsive */}
                <Navbar.Toggle arial-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                    <Nav className="me-auto">
                        <Nav.Link className="link" onClick={() => router.push("/")}>Home</Nav.Link>
                        <Nav.Link className="link" onClick={() => router.push("/about")}>About</Nav.Link>
                        <Nav.Link className="link" onClick={() => router.push("/services")}>Services</Nav.Link>
                        <Nav.Link className="link" onClick={() => router.push("/blog")}>Blog</Nav.Link>
                        <Nav.Link className="link" onClick={() => router.push("/more")}>More</Nav.Link>
                    </Nav>
                    <Nav>
                    <button type="button" 
                    onClick={() => router.push('/more')}
                    className="navbar-text btn btn-outline-success custom-btn">
                        Contact
                    </button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}


export default NavBar;