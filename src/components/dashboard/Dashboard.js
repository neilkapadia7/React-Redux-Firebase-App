import React, {useEffect} from 'react';
import Notification from './Notifications';
import ProjectList from '../project/ProjectList';

import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {getProjects} from '../../actions/projectAtions';
import { Redirect } from 'react-router-dom';


const Dashboard = ({auth, projects, notifications, getProjects}) => {
    useEffect(() => {
        getProjects();
    }, []);

    //Protected Route
    if(!auth.uid) return <Redirect to='/signin' />

    return (
        <div className='dashboard container'>
            <div className='row'>
                <div className='col s12 m6'>
                    {projects !== null 
                        ? 
                        <ProjectList projects={projects} key={projects.id}/>
                        : 'Loading...'
                    }
                    
                </div>
                <div className='col s12 m5 offset-m1'>
                    <Notification notifications={notifications}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    projects: state.project.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
})

export default compose(
    connect(mapStateToProps, {getProjects}),
    firestoreConnect([
        { collection: 'projects'},
        { collection: 'notifications',  limit: 3}
    ])
)(Dashboard);
