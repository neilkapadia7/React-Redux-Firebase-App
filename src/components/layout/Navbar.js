import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

const Navbar = ({auth}) => {
    console.log(auth);

    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

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
    auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navbar);
