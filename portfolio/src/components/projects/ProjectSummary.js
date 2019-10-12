import React from 'react';
import './ProjectSummary.css';

const ProjectSummary = ({project}) => {
    return (
        <div className="col-6 col-lg-2 card-cont">
            <div className="proj-card middle">
                <div className="front">
                    <img className="proj-img img-fluid" src={project.image} alt="project"></img>
                </div>
                <div className="back">
                    <div className="proj-desc middle">
                        <h5 className="title">{project.name}</h5>
                        <p className="descript">{project.description} </p>
                        <p className="tech">TECHNOLOGIES: <br /> {project.tech} </p>
                        <div className="sm">
                            <p>{project.link} </p>
                            <br></br>
                            <p>{project.hub} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary; 