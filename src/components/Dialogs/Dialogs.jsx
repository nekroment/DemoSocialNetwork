import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { requiredField, maxLengthCreator, minLengthCreator } from '../../utilits/validators/validators';

let maxLength10=maxLengthCreator(10);
let minLength2=minLengthCreator(2);

const DialogForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        
        <Field component={Textarea} name={'newMessageBody'} placeholder={'Message'} 
        validate={[requiredField, maxLength10, minLength2]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    
  </form>
  )
}

const DialogReduxForm=reduxForm({
  form:'dialog'
})(DialogForm)

const Dialogs = (props) => {

  let addNewMessage = (values) => {
          props.AddMessage('me', values.newMessageBody);
  }

  let dialogsElements = props.messagePage.dialog.map((user) => { return <DialogItem name={user.name} avatar={user.avatar} /> })
  let messagesElements = props.messagePage.message.map((message) => { return (<div className={classes[message.user]}><Message message={message.message} /> </div>) })
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <DialogReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}
export default Dialogs