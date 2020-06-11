import React from 'react';
import { SendMessageActionCreator } from '../../redux/reducer/messageReducer.js';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  }
}

export default compose(
  connect(mapStateToProps, {
    AddMessage: SendMessageActionCreator,
  
  }),
  withAuthRedirect
)(Dialogs);