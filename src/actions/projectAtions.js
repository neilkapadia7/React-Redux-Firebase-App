
import axios from "axios";

export const createProject = (project) => async dispatch => {
    try {
        

        dispatch({type: 'CREATE_PROJECT', payload: project});
    } 
    catch (err) {
        
    }
}