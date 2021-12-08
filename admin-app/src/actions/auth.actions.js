import { authConstants } from "./costants"





export const login = (user) => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload: {
                ...user
            }
        })
    }
}