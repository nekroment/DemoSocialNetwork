import React from 'react';
import classes from './ProfileInfo.module.css';
import logo from '../../img/user-male.png'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div class={classes.grid}>
      <div className={classes.ProfileLogo}>
        <img src='https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg' />
      </div>
      <div className={classes.ProfilePhoto}>
      <img src={props.profile.photos.large!=null ? props.profile.photos.large : logo}/>
      </div>
      <div className={classes.description}>
        {props.profile.fullName}
        </div>
    </div>
    <div className={classes.about_me}>
        {props.profile.aboutMe}
      </div>
      <div className={classes.contacts}>
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
    
  )
}
export default ProfileInfo;