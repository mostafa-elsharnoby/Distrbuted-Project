import axios, { Axios } from "axios"
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_SIGNOUT, USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_UP_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGN_IN_REQUEST, payload: { email, password } })
    try {
        const { data } = await axios.post('api/signin', { email, password })
        dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data })
        window.location.replace("http://localhost:3000/")
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGN_IN_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const register = (firstName, lastName, email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGN_UP_REQUEST, payload: { email, password } })
    try {
        const { data } = await axios.post('api/signup', { firstName, lastName, email, password })
        dispatch({ type: USER_SIGN_UP_SUCCESS, payload: data })
        dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data })
        window.location.replace("http://localhost:3000/")
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGN_UP_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')

    dispatch({ type: USER_SIGNOUT })
}

export const detailsUser = (userId) => async (dispatch,getState) => {
    dispatch({type: USER_DETAILS_REQUEST , payload: userId})
    const { userSignin:{userInfo} } = getState()
    try {
        const { data } = await axios.get(`/api/user`,{
            headers: {Authorization: `Bearer ${userInfo.token}`}
        })
        dispatch({type: USER_DETAILS_SUCCESS , payload: data})
    } catch (error) {
        dispatch({type: USER_DETAILS_FAIL , payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message })
    }
}

export const updateUserProfile = (user) => async (dispatch,getState) => {
    dispatch({type: USER_UPDATE_PROFILE_REQUEST , payload: user})
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await axios.put(`/api/user/update`,user,{
            headers : { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: data})
        dispatch({type: USER_SIGN_IN_SUCCESS, payload: data})
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({type: USER_UPDATE_PROFILE_FAIL , payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message})
    }
}
