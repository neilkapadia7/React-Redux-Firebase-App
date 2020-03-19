import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';

import {firebaseReducer} from 'react-redux-firebase'; 
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: AuthReducer,
    project: ProjectReducer
});