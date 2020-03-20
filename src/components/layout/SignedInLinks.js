import React from 'react'
import { NavLink } from 'react-router-dom'

import {connect} from 'react-redux';
import {signOut} from '../../actions/authActions';

const SignedInLinks = ({profile ,signOut}) => {
    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={() => signOut()}>Logout</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
        </ul>
    )
}

export default connect(null, {signOut})(SignedInLinks);
