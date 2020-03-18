
const initialState = {
    projects: [
        {id: '1', title: 'Help Me Complete this Course', content: 'Hello Fraands Chai pee lo!'},
        {id: '2', title: 'Help Me Complete this Course', content: 'Hello Fraands Chai pee lo!'},
        {id: '3', title: 'Help Me Complete this Course', content: 'Hello Fraands Chai pee lo!'}
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return {
                projects: [...state.projects, action.payload]
            }
        default:
            return state;
    }
}
