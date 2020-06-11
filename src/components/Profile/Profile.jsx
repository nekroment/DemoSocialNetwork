import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status}
      updateStatus={props.updateStatus}/>
      <MyPosts newPostText={props.newPostText} posts={props.posts} onAddPost={props.onAddPost}/>
    </div>
  )
}
export default Profile