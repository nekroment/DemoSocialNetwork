import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

let Users=(props)=>{
    
    return (
        <div>
           <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {props.users.map(users => <div key={users.id}>
                    <User user={users} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow}/>
                    </div>
                    )}
                </div>
            </div>
    )
}
export default Users