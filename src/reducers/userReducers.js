import {
    USER_LOGIN_SUCCESSFUL,
    USER_LOGIN_FAILED,
    USER_LOGOUT
} from '../constants/userConstants'

export const userLoginReducer = (state = {'username': '', 'error': ''}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESSFUL:
            return { username: action.payload, error: '' }
        case USER_LOGIN_FAILED:
            return { username: '', error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}