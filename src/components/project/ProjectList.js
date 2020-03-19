import React, { Fragment } from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className='project-list section'>
            {projects && projects.map(project => 
                <Fragment key={project.id}>
                <Link to={`/project/${project.id}`}>
                    <ProjectSummary key={project.id} project={project} />
                </Link>
                </Fragment>
            )}
        </div>
    )
}

export default ProjectList;
