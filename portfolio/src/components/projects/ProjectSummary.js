import React from 'react';
import './ProjectSummary.css';

const ProjectSummary = ({project}) => {
    return (
        <div className="col-6 col-lg-2 card-cont">
            <div className="proj-card middle">
                <div className="front">
                    <img className="proj-img img-fluid" src="/images/wePlan.png" alt="project image"></img>
                </div>
                <div className="back">
                    <div className="proj-desc middle">
                        <h5>{project.title}</h5>
                        <p>{project.description} </p>
                        <p>{project.tech} </p>
                        <div className="sm">
                            <p>{project.link} </p>
                            <p>{project.hub} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary; 