import React from 'react';
import './ProjectSummary.css';
import moment from 'moment';


const ProjectSummary = ({project}) => {
    return (

        <div className="col-12 col-md-4 proj-cont">
            <img className="img-fluid project-img" src={project.image} alt={project.name}></img>
            <div className="descr">
                <h5 className="title">{project.name}</h5>
                <p className="descript">{project.description} </p>
                <p className="tech">TECHNOLOGIES: <br /> {project.tech} </p>
                <div className="sm">                          
                    <p>Added on: {moment(project.createdAt.toDate()).calendar()} </p>
                    <br></br>
                    <p className="logoLink">
                        <a href={project.link} target="_blank" rel="noopener noreferrer"> <img width="30px" src="/images/navigate.jpg" alt="navigate" /> </a>
                        <a href={project.hub} target="_blank" rel="noopener noreferrer"> <img width="30px" src="/images/github.png" alt="github" /> </a>
                    </p>                                                      
                </div>    
            </div>
        </div>
    )
}

export default ProjectSummary; 