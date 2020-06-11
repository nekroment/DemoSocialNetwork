import {profileAPI } from "../../api/api";

const ADD_POST='ADD_POST';
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_STATUS='SET_STATUS';

let initialState = {
    post: [
        { id: 1, post: 'Idi Na Huj' },
        { id: 2, post: 'Sam idi' },
        { id: 3, post: 'Net ty' },
        { id: 4, post: '...' }],
    profile: null,
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.post.length + 1,
                post: action.newPostBody,
            }
            let stateCopy = { ...state };
            stateCopy.post = [...state.post];
            stateCopy.post.push(newPost);
            return stateCopy
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return{...state, status: action.status}
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
}
export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus=(status)=>{return{type:SET_STATUS, status}}

export const getProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId);

        dispatch(setUserProfile(response.data))
    };
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);

        dispatch(setStatus(response.data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    }
}


export default profileReducer