import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header=(props)=>{
    return(
        <header className={classes.header}>
        <img src='https://cdn.worldvectorlogo.com/logos/puma-logo.svg' />
        <div className={classes.loginBlock}>
          {props.isAuth ? <div>
           {props.login} - <button onClick={props.LogOut}>Log out</button>
          </div> : <NavLink to={`/login`}>Login</NavLink>}
        </div>
      </header>
    )
}
export default Header