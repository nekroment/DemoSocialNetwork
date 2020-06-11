import React from 'react';
import Header from './Header';
import {  authMeThunkCreator, LogOutThunkCreator } from '../../redux/reducer/AuthReducer';
import { connect } from "react-redux";

class HeaderContainer extends React.Component{

  render(){
    return(
      <Header {...this.props}/>
    )
  }
    
}

const mapStateToProps=(state)=>{
  return({
    isAuth: state.auth.isAuth,
    login: state.auth.login
  })
}

export default connect(mapStateToProps,{LogOut: LogOutThunkCreator})(HeaderContainer);