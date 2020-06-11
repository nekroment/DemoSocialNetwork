import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getProfileThunkCreator, getStatus, updateStatus, addPostActionCreator } from '../../redux/reducer/profileReducer';
import { withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount(){
    let userId=this.props.match.params.userId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  
  render () {
    return (
      <Profile {...this.props} profile={this.props.profile}
        status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  newPostText: state.profilePage.newPostText,
  posts: state.profilePage.post
})

export default compose(connect(mapStateToProps, {
  setUserProfile,
  getProfile: getProfileThunkCreator,
  getStatus,
  updateStatus,
  onAddPost: addPostActionCreator
}),
  withRouter,
  withAuthRedirect)(ProfileContainer)


