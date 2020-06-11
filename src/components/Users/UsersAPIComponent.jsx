import React from 'react'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render(){
        return <>

        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
        followingInProgress={this.props.followingInProgress}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleInProgress={this.props.toggleInFollowingProgress}/>
        </>
    }

}

export default UsersAPIComponent