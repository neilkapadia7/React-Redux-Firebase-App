
const initialState = {
    authError: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('Login Error')
            return {
                ...state,
                authError: 'Login Fail'
            }
        default:
            return state;
    }
}