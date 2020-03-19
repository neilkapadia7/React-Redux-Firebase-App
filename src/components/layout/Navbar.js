import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

const Navbar = ({statee}) => {
    console.log(statee);
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>
                    MarioPlan
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    statee: state
});

export default connect(mapStateToProps)(Navbar);
