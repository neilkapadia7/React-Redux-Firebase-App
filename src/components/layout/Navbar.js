import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

const Navbar = ({auth, profile}) => {
    console.log('State Yaha Hai',profile);

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>
                    MarioPlan
                </Link>
                {/* {auth.isLoaded ? links : null} */}
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
});

export default connect(mapStateToProps)(Navbar);
