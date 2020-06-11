import { usersAPI } from "../../api/api"
import { updateObjectInArray } from "../../utilits/validators/objects-helpers"

let FOLLOW='FOLLOW'
let UNFOLLOW='UNFOLLOW'
let SET_USERS='SET_USERS'
let SET_CURRENT_PAGE='SET_CURRENT_PAGE'
let SET_TOTAL_COUNT='SET_TOTAL_COUNT'
let TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
let TOGGLE_IN_PROGRESS='TOGGLE_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case FOLLOW: {
            stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
            return stateCopy
        }
        case UNFOLLOW: {
            stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
            return stateCopy
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING:{
            return{...state, isFetching: action.isFetching}
        }
        case TOGGLE_IN_PROGRESS:{
            return{...state, 
                followingInProgress: action.isFetching? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id=>id!=action.userId)}
        }
        default: return state;
    }
}
export const followAC = (id) => ({ type: FOLLOW, userId: id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id })
export const setUsersAC = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount: totalUsersCount })
export const setIsFetching=(isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching:isFetching})
export const toggleInFollowingProgress=(isFetching, userId)=>({type:TOGGLE_IN_PROGRESS, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsersAC(response.items))
            dispatch(setIsFetching(false))
            dispatch(setTotalCount(response.totalCount))
    }
}

const FollowUnfollowFlow= async (dispatch, userId, apiMethod, actionCreator)=>{

    dispatch(toggleInFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleInFollowingProgress(false, userId))
    }

}

export const UnfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        FollowUnfollowFlow(dispatch, userId, usersAPI.Unfollow.bind(usersAPI), unfollowAC);
    }
}

export const FollowThunkCreator = (userId) => {
    return async (dispatch) => {
        FollowUnfollowFlow(dispatch, userId, usersAPI.Follow.bind(usersAPI), followAC);
    }
}

export default usersReducer