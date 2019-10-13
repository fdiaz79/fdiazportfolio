import React from 'react';
import DeleteSummary from './DeleteSummary';


const DeleteList = ({projects}) => {
    return(
        <div className="row">            
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Project ID</th>
                        <th scope="col">Project Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Importance</th>
                        <th scope="col">Shown</th>
                    </tr>
                </thead>
                <tbody>
                    { projects && projects.map(project => {
                        return(
                            <DeleteSummary project={project} key={project.id} />
                        )
                    })}
                </tbody>
                    
            </table>
        </div>
    )
}

export default DeleteList;