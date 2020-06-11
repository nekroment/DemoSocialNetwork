import React from 'react'
import logo from '../../img/user-male.png'
import style from './User.module.css'
import { NavLink } from 'react-router-dom'

let User = (props) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : logo} className={style.photo} />
                    </NavLink>

                </div>
                <div>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id == props.user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id == props.user.id)} onClick={() => {
                            props.follow(props.user.id)
                        }
                        }>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                </span>
            </span>
        </div>
    )
}

export default User