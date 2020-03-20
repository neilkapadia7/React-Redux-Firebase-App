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

export const signUp = (newUser) => async dispatch => {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        
        const res2 = await firebase
                            .firestore()
                            .collection('users')
                            .doc(res.user.uid)
                            .set({
                                firstName: newUser.firstName,
                                lastName: newUser.lastName,
                                initials: newUser.firstName[0] + newUser.lastName[0]
                            })
        dispatch({ type: 'SIGNUP_SUCCESS'});
       
    } 
    catch (err) {
        dispatch({ type: 'SIGNUP_ERROR', payload: err});
    }
}