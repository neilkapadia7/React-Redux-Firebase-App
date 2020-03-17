import React, {useState} from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        console.log({email, password})
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
                </div>
            </form>
        </div>
    )
}

export default SignIn;
