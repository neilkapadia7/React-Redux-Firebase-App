import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import {signUp} from '../../actions/authActions';
import {connect} from 'react-redux';

const SignUp = ({auth, authError, signUp}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        // console.log({firstName, lastName, email, password})
        signUp({firstName, lastName, email, password});
    }

    //Protected Route
    if(auth.uid) return <Redirect to='/' />

    return (
        <div className='container'>
            <form onSubmit={onSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' onChange={(e) => setFirstName(e.target.value)}  name='password'/>
                </div>
                <div className='input-field'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' onChange={(e) => setLastName(e.target.value)}  name='password'/>
                </div>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}  name='email'/>
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Passowrd</label>
                    <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}  name='password'/>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                    <div className='red-text center'>
                        { authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    authError: state.auth.authError
});

export default connect(mapStateToProps, {signUp})(SignUp);
