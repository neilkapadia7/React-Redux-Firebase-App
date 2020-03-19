
const initialState = {
    projects: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('Create Project Reducer called')
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case 'GET_PROJECTS':
            return {
                ...state,
                projects: action.payload
            }
        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Error Reducer Called' ,action.payload);
            return state;
        default:
            return state;
    }
}
