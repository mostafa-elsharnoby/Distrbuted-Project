import axios, { Axios } from "axios"
import { USER_SIGNOUT, USER_SIGN_IN_FAIL, USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_UP_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS } from "../constants/userConstants"

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
