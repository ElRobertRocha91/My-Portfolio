'use client'

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";

const Index = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    //Cuando Index se monte, marcamos la image como cargada:
    useEffect(() => {
        setImageLoaded(true);
    }, []);

    //DOWNLOAD
    const handleDownloadClick = () => {
        //Uso el objeto global para la descarga, evitando usar router.push() que me provocaba un error
        window.open('/Roberto Esteban Rocha CV.pdf');
    }

    return (
        <Layout>
            {/* header intro */}
            <header className="row custom-bg-dark vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-12">
                    <div className="row text-light align-items-center">
                        <div className="col-md-4 text-center text-md-right">
                            <img src="Foto-CV.jpg" alt="image" className={`custom-img img-fluid ${imageLoaded ? "show" : ""}`}/>
                        </div>
                        <div className="col-md-8">
                            <h6 className={`custom-text ${imageLoaded ? "show" : ""}`}>Full Stack Developer</h6>
                            <h1 className={`custom-heading ${imageLoaded ? "show" : ""}`}>
                                <span>Hello, I'm Roberto</span>
                                <br />
                                <span className={`custom-span ${imageLoaded ? "show" : ""}`}>Rocha</span>
                            </h1>
                            <p className={`custom-p ${imageLoaded ? "show" : ""}`}>
                                Full Stack Web Developer with experience in developer front-end and back-end. I have a background in Administrative.
                                My profile is very complete, you will get a profile with great resolutive and analytical capacity. Results oriented with great leadership,
                                objectivity and communication.
                            </p>
                            <div className="responsive-button">
                                <button type="button"
                                    onClick={handleDownloadClick}
                                    className={`btn-outline-secondary custom-btn-cv ${imageLoaded ? "show" : ""}`}>
                                    DOWNLOAD CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* second section */}
            <AboutMe />
            {/* third section */}
            <Portfolio />
            {/* fourth section */}
            <Contact />
        </Layout>)
}

export default Index;