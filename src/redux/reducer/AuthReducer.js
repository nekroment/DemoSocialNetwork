import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

let SET_USER_DATA='SET_USER_DATA';

let initialState = {
    usersId: null,
    email:null,
    login:null,
    isAuth:false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return{...state, ...action.data}
        }
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const authMeThunkCreator = () => {
    return async (dispatch) => {
        debugger
        let response = await authAPI.authMe();
        debugger
        if (response.data.resultCode == 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    };
}
export const LoginMeThunkCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.Login(email, password, rememberMe);
        
        if (response.data.resultCode === 0) {
            dispatch(authMeThunkCreator())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some erorr';
            dispatch(stopSubmit('login', { _error: message }));
        }
    }
}

export const LogOutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.LogOut();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}


export default authReducer