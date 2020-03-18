
import axios from "axios";

export const createProject = (project) => async (dispatch, {getFirebase, getFireStore}) => {
    try {
        

        dispatch({type: 'CREATE_PROJECT', payload: project});
    } 
    catch (err) {
        
    }
}