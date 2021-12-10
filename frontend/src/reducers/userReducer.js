import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_SIGNOUT, USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_UP_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

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

export const userDetailsReducer = (state = {loading: true},action) => {
    switch(action.type){
        case USER_DETAILS_REQUEST :
            return {loading: true}
        case USER_DETAILS_SUCCESS :
            return {loading: false , user: action.payload}
        case USER_DETAILS_FAIL :
            return {loading: false , error: action.payload}
        default :
            return state
    }
}

export const userUpdateProfileReducer = (state = {},action) => {
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST :
            return {loading: true}
        case USER_UPDATE_PROFILE_SUCCESS :
            return {loading: false , success: true}
        case USER_UPDATE_PROFILE_FAIL :
            return {loading: false , error: action.payload}
        case USER_UPDATE_PROFILE_RESET :
            return {}
        default :
            return state
    }
}