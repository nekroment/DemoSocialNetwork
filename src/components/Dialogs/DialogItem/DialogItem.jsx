import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <img src={props.avatar}/>
      <NavLink to={'/dialogs/' + props.name} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem