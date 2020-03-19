import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import firebase from 'firebase/app';
import {  reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase } from 'react-redux-firebase';


const initialState = {}

const middleware  = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store;