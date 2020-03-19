import firebase from '../config/fbConfig';

export const signIn = (credentials) => async dispatch => {
    try {
        await firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        
        dispatch({ type: 'LOGIN_SUCCESS'});
    }
    catch (err) {
        dispatch({ type: 'LOGIN_ERROR', payload: err });
    }
}

export const signOut = () => async dispatch =>{
    try {
        await firebase.auth().signOut();
        dispatch({ type: 'SIGNOUT_SUCCESS' })
    } 
    catch (err) {
        console.log(err)
    }
}