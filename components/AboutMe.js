import { skills } from "../data/skills";

const AboutMe = () => (
    <div className="row custom-bg-black">
        <div className="text-light">
            <h2 className="custom-title text-center">About Me</h2>
            <div className="container-md text-start fs-4 p-5 px-10">
                <p>
                    Hello! my name is Roberto Rocha, I am a Full Stack Web Developer Jr.
                    interested and passionate about technology, I starded my training ot the
                    National Technological University as a University Technician in Programing.
                    With the purpose of becoming a Software Developer.
                    Currently acquiring new knowledge and applying them in proyects that may be of
                    your interest, I invite you to kmoew them in the following section.
                </p>
            </div>
            <div className="container">
                <h2 className="custom-title">Hard Skills</h2>
                <div className="d-flex flex-wrap justify-content-between">
                    <ul className="list-unstyled row">
                        {
                            skills.map(({ skill, image }, index) => (
                                <li key={index} className="col-md-4 mb-3">
                                    <div className="card bg-dark text-center border-primary">
                                        <div className="mt-2">
                                            <img src={`/${image}`} alt="image"
                                                className=" card-img-top img-fluid"
                                                style={{ maxWidth: "100px", maxHeight: "100px" }}
                                            />
                                            <h4 className="card-title text-light mt-2">{skill}</h4>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default AboutMe;