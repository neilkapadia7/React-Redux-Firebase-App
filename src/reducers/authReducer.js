
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
        case 'SIGNOUT_SUCCESS':
            console.log('Sign Out Success');
            return state;
        default:
            return state;
    }
}