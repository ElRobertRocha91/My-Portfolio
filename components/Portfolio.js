import Link from "next/link";
import { Projects } from "../data/projects";

const Portfolio = () => (
    <div className="container-fluid text-center overflow-hidden bg-black">
        <h1 className="text-center custom-title">Portfolio</h1>
        <div className="row gx-5">
            {
                Projects.map(({ name, description, image, repository, url }, index) => (
                    <div className="col" key={index}>
                        <div className="card p-3 mb-4 bg-dark h-100 d-flex flex-column justify-content-between border-primary">
                            <div className="overflow">
                                <img src={`/${image}`} alt="img" className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body text-light" style={{ maxHeight: "150px", overflow: "hidden" }}>
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <div className="d-grid gap-2 d-md-block">
                                    <Link href={url}>
                                        <a className="btn btn-primary btn-sm mx-2">Demo</a>
                                    </Link>
                                    <Link href={repository}>
                                        <a className="btn btn-primary btn-sm mx-2">Repository</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Portfolio;