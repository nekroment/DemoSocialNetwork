import { authMe, authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
import { authMeThunkCreator } from "./AuthReducer";

let INITIALIZED_SUCCESS='INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return{...state, initialized: true}
        }
        default: return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export const initializeThunkCreator = () => {
    return (dispatch) => {
        dispatch(authMeThunkCreator())
        .then(()=>
        dispatch(initializedSuccess()));
        
    }
}

export default AppReducer