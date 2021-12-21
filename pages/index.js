import Layaut from "../components/Layaut";
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { skills, experience, projects } from "../profile";
import Link from "next/link";
console.log(experience);
const index = () => {
    return (
        <Layaut>
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="yo.jpg" className="img-fluid" alt="imagen de perfil" />
                            </div>
                            <div className="col-md-8">
                                <h1>Ezequiel Ramirez</h1>
                                <h3>Desarrollador Front-End</h3>
                                <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem! lorem ipsum lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem! lorem ipsum</p>
                                <a href="/hireme" className="btn btn-warning">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* second section */}
            <div className="row">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>
                            {skills.map(({ skill, percentage }, i) =>
                            (
                                <div key={i} className="py-3">
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${percentage}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                </div>
                            )
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experience</h1>
                            <ul>
                                {
                                    experience.map(({ company, position, date, description }, i) =>
                                    (
                                        <li key={i}>
                                            <h3>{company}</h3>
                                            <h5>{position}</h5>
                                            <h6>{date}</h6>
                                            <p>{description}</p>
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                            <Link href="/experience">
                                <a className="btn btn-primary">Ver mas</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* porfolio */}

            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div ClassName="row ">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portfolio</h1>
                            </div>
                            <div className="row">
                                {
                                    projects.map(({ title, description, image }, i) =>
                                    (
                                        <div className="col-md-4 p-2 " key={i}>
                                            <div className="card h-100">
                                                <div className="overflow">
                                                    <img src={image} className="card-img-top" alt="imagen de portafolio" />
                                                    <div className="card-body">
                                                        <h3 className="card-title">{title}</h3>
                                                        <p className="card-text">{description}</p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 mt-3">
                <div className="text-center">
                    <Link href="/hireme">
                        <a className="btn btn-success">Hire Me</a>
                    </Link>
                    </div>
            </div>
        </Layaut>
    )
}
export default index;