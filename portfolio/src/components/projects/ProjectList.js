import React from 'react';
import ProjectSummary from './ProjectSummary';
import './ProjectList.css';


const ProjectList = ({projects}) => {
    return(
        <div className="row portfolio">
            { projects && projects.map(project => {
                return(
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;