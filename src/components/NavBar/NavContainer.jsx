import React from 'react';
import {connect} from 'react-redux'
import Navbar from './Nav';

let mapStateToProps=(state)=>{
  return{
    friends: state.sideBarPage.friends.map((friend) => { return friend.name }),
    avatar: state.sideBarPage.friends.map((avatar) => { return <img src={avatar.avatar} /> }),
    myId: state.auth.userId
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{
    
  }
}
const NavbarContainer=connect(mapStateToProps)(Navbar)
export default NavbarContainer