import {combineReducers} from 'redux';

import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';

export default combineReducers({
    auth: AuthReducer,
    project: ProjectReducer
});