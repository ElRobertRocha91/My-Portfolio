import Layout from "../components/Layout";
import CV from "../components/CV";
import Portfolio from "../components/Portfolio";

const Index = () => (
    <Layout>
        {/* header intro */}
        <header>
            <div className="row bg-dark vh-50">
                <div className="col-md-12">
                    <div className="row text-light">
                        <div className="col-md-4">
                            <img src="Photo-Perfil.jpg" alt="image"/>
                        </div>
                        <div className="col-md-8">
                            <h6>Licenciado en Administración</h6>
                            <h1>
                                Hello, I'm a Web
                                <br/>
                                <span>Developer</span>
                            </h1>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* second section */}
        <CV/>
        {/* third section */}
        <Portfolio/>
    </Layout>
)

export default Index;