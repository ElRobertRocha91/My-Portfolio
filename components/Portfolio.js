import Link from "next/link";
import { Projects } from "../data/projects";

const Portfolio = () => (
    <div className="container-fluid vh-100 text-center overflow-hidden bg-black">
        <h1 className="text-center custom-title">Portfolio</h1>
        <div className="row gx-5">
            {
                Projects.map(({ name, description, image }, index) => (
                    <div className="col" key={index}>
                        <div className="card p-3 mb-4 bg-dark h-90 d-flex flex-column justify-content-between border-primary">
                            <div className="overflow">
                                <img src={`/${image}`} alt="img" className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body text-light">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <Link href="/more">
                                    <button className="btn btn-primary">Know more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Portfolio;