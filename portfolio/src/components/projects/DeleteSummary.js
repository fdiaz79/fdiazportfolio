import React from 'react';
import moment from 'moment';

const DeleteSummary = ({project}) => {
    return(
        <tr>
            <th>{project.id} </th>
            <th>{project.name} </th>
            <th>{moment(project.createdAt.toDate()).calendar()} </th>
            <th>{project.relevance}</th>
            <th>
                <input type="checkbox" aria-label="Show?" data-project={project.id} />
            </th>
        </tr>
    )
}

export default DeleteSummary;