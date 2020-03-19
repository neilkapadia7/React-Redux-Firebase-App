import React, {useState} from 'react';

import {connect} from 'react-redux';
import {signIn} from '../../actions/authActions'; 

const SignIn = ({authError, signIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        // console.log({email, password});
        signIn({email, password});
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Sign In</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}  name='email'/>
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Passowrd</label>
                    <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}  name='password'/>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Login</button>
                    <div className='red-text center'>
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    authError: state.auth.authError
});

export default connect(mapStateToProps, {signIn})(SignIn);
