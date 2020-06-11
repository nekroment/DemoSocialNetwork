import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, requiredField } from '../../utilits/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';
import styles from './../common/FormsControls/FormsControls.module.css'

let maxLengthEmail=maxLengthCreator(30);
let minLengthEmail=minLengthCreator(6);
let maxLengthPassword=maxLengthCreator(30);
let minLengthPassword=minLengthCreator(6);

const LoginForm=(props)=>{
    return(
            <form onSubmit={props.handleSubmit}>
                <div> 
                    <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={[requiredField, maxLengthEmail, minLengthEmail]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input}
                    validate={[requiredField, maxLengthPassword, minLengthPassword]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'}  component={'input'}/> remember me
                </div>
                {props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm=reduxForm({
   form:'login' 
})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
    props.LoginMe(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={`/profile/${props.userId}`} />
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login