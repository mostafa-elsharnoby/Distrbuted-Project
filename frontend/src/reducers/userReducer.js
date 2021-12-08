import { USER_SIGNOUT, USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_UP_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS } from "../constants/userConstants";

export const userSigninReducer = (state = {} , action) => {
    switch(action.type){
        case USER_SIGN_IN_REQUEST :
            return {loading: true}
        case USER_SIGN_IN_SUCCESS :
            return {loading: false , userInfo: action.payload}
        case USER_SIGN_IN_FAIL :
            return {loading: false , error: action.payload}
        case USER_SIGNOUT :
            return {}
        default :
        return state
    }
}

export const userRegisterReducer = (state = {} , action) => {
    switch(action.type){
        case USER_SIGN_UP_REQUEST :
            return {loading: true}
        case USER_SIGN_UP_SUCCESS :
            return {loading: false , userInfo: action.payload}
        case USER_SIGN_UP_FAIL :
            return {loading: false , error: action.payload}
        default :
        return state
    }
}