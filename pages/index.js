import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        {/* header intro */}
        <header>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="Photo-Perfil.jpg" alt="image"/>
                        </div>
                        <div className="col-md-8">
                            <h6>Licenciado en Administración</h6>
                            <h1>
                                I'm a Web
                                <br/>
                                <span>Developer</span>
                            </h1>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                        </div>
                        <div>
                            <button className="btn btn-secondary">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </Layout>
)

export default Index;