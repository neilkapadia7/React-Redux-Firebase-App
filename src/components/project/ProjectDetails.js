import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import {compose} from 'redux';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


const ProjectDetails = (props) => {
    const id = props.match.params.id;

    const {auth,projects} = props;

    //Protected Route
    if(!auth.uid) return <Redirect to='/signin' />


    if(projects === null) {
        console.log('No Projects Yet');
    }
    if(projects) {
        const project = projects ? projects[id] : null;
        console.log('Neil Ye Desk!', project)
        return (
            <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-tilte'>{project.title} - {id}</span>
                    <p>{project.content}</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )

    }

    return (
        <h4>Loading....</h4>        
    )
}

const mapStateToProps = state => ({
    projects: state.firestore.data.projects,
    auth: state.firebase.auth
});

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);
