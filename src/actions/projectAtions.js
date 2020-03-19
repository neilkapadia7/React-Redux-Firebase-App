// import { useFirestoreConnect } from 'react-redux-firebase'
import firebase from '../config/fbConfig';

export const createProject = (project) => async (dispatch) => {
    try {
        // const firestore = useFirestoreConnect();

        await firebase.firestore().collection('projects').add({
            ...project,
            authorFirstName: 'Neil',
            authorLastName: 'Kapadia',
            authorId: 12345,
            createdAt: new Date()
        });

        dispatch({type: 'CREATE_PROJECT', payload: project});
    } 
    catch (err) {
        dispatch({type: 'CREATE_PROJECT_ERROR', payload: err});
    }
}

export const getProjects = () => async dispatch => {
    try {
        await firebase
                .firestore()
                .collection('projects')
                .onSnapshot(snap => {
                    const newProj = snap.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    })
                )

                    dispatch({type: 'GET_PROJECTS', payload: newProj});
                })

    } 
    catch (err) {
        console.log(err)
    }
}