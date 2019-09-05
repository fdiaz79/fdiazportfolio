import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return(
        <div className=" row project-list">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
}

export default ProjectList;