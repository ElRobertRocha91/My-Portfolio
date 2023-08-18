import { skills } from "../data/skills";
import { experiences } from "../data/experiences";

const CV = () => (
    <div className="row py-2">
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-body"></div>
                <h1>Skills</h1>
                {
                    skills.map(({ skill, porcentage}, index) => (
                        <div className="py-3" key={index}>
                            <h5>{skill}</h5>
                            <div className="progress-bar">
                                <div
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: `${porcentage}%`}}
                                >
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body"></div>
                <h1>Experiences</h1>
                <ul>
                    {
                        experiences.map(({ title, description, from, to }, index) => (
                            <li key={index}>
                               <h3>{title}</h3>
                               <h5>{from}-{to}</h5>
                               <p>{description}</p> 
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default CV;