import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CV from "../components/CV";
import Portfolio from "../components/Portfolio";

const Index = () => {
    const [imageLoanded, setImageLoaded] = useState(false);

    //Cuando Index se monte, marcamos la image como cargada:
    useEffect(() => {
        setImageLoaded(true);
    },[])
    
    return (
        <Layout>
            {/* header intro */}
            <header className="row custom-bg-dark vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-12">
                    <div className="row text-light align-items-center">
                        <div className="col-md-4 text-center text-md-right">
                            <img src="Photo-Perfil.jpg" alt="image" className={`custom-img ${imageLoanded ? "show" : ""}`} />
                        </div>
                        <div className="col-md-8">
                            <h6 className={`custom-text ${imageLoanded ? "show" : ""}`}>Licenciado en Administración</h6>
                            <h1>
                                <span>Hello, I'm a Web</span>
                                <br />
                                <span className="custom-text">Developer</span>
                            </h1>
                            <p className={`custom-p ${imageLoanded ? "show" : ""}`}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                        </div>
                        <div>
                            <button type="button" className={`btn btn-outline-success btn-cv ${imageLoanded ? "show" : ""}`}>DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </header>
            {/* second section */}
            <CV />
            {/* third section */}
            <Portfolio />
        </Layout>)
}

export default Index;