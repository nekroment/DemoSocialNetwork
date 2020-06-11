import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator, minLengthCreator } from '../../../utilits/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { PureComponent } from 'react';

let maxLength10=maxLengthCreator(10);
let minLength2=minLengthCreator(2);

class MyPosts extends PureComponent {

  PostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeHolder={'Post message'} name={'post'} component={Textarea}
            validate={[requiredField, maxLength10, minLength2]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  }

  PostReduxForm = reduxForm({
    form: 'post'
  })(this.PostForm)

  onSubmit = (formData) => {
    this.props.onAddPost(formData.post)
  }
  render() {
    let PostsElements = this.props.posts.map((post) => { return <Post message={post.post} /> })
    return (
      <div className={classes.myPosts}>
        My Posts
        <this.PostReduxForm onSubmit={this.onSubmit} />
        <div>
          {PostsElements}
        </div>
      </div>
    )
  }


}
export default MyPosts