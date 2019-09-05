import React from 'react';
import './ProjectSummary.css';

const ProjectSummary = () => {
    return (
        <div className="col-6 col-lg-2 card-cont">
            <div className="proj-card middle">
                <div className="front">
                    <img className="proj-img img-fluid" src="/images/wePlan.png" alt="project image"></img>
                </div>
                <div className="back">
                    <div className="proj-desc middle">
                        <p>TITLE</p>
                        <p>DESCRIPTION</p>
                        <p>TECH USED</p>
                        <div className="sm">
                            <p>Link to project</p>
                            <p>Link to code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary; 