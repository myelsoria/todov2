import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESSFUL,
    USER_LOGIN_FAILED,
    USER_LOGOUT
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESSFUL:
            return {loading: false, username: action.payload}
        case USER_LOGIN_FAILED:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}