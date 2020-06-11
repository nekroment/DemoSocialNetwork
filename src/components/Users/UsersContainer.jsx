import { connect } from "react-redux";
import { getUsersThunkCreator, UnfollowThunkCreator, FollowThunkCreator, toggleInFollowingProgress } from "../../redux/reducer/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";
import { getPageSize, getTotalUserCount, getCurrentPage, getIsFetching, getFollowintInProgress, getUsers } from "../../redux/selector/usersSelector";

let mapStateToProps=(state)=>{
    return({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowintInProgress(state)
    })
}

let UsersContainer=connect(mapStateToProps,{
    follow:FollowThunkCreator,
    getUsers: getUsersThunkCreator,
    unfollow: UnfollowThunkCreator,
    toggleInFollowingProgress: toggleInFollowingProgress
})(UsersAPIComponent)
export default UsersContainer
