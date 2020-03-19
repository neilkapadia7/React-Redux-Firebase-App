import React, {useEffect} from 'react';
import Notification from './Notifications';
import ProjectList from '../project/ProjectList';

import {connect} from 'react-redux';
import {getProjects} from '../../actions/projectAtions';


const Dashboard = ({projects, getProjects}) => {
    console.log(projects)

    useEffect(() => {
        getProjects();
    }, []);
    return (
        <div className='dashboard container'>
            <div className='row'>
                <div className='col s12 m6'>
                    <ProjectList projects={projects}/>
                </div>
                <div className='col s12 m5 offset-m1'>
                    <Notification />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    projects: state.project.projects
})

export default connect(mapStateToProps, {getProjects})(Dashboard);
