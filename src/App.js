import React, { Suspense } from 'react';
import './App.css';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import NavbarContainer from './components/NavBar/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeThunkCreator } from './redux/reducer/AppReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore';
const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount(){
    console.log('test')
    this.props.initializeApp()
  }
  render() {
    
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='content'>
          <Route path='/dialogs' render={() => {
            return <Suspense fallback={<Preloader />}>
              <DialogsContainer />
            </Suspense>
          }} />
          <Route path='/profile/:userId' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps=(state)=>({
  initialized: state.app.initialized
})

let AppContainer = compose(connect(mapStateToProps, { initializeApp: initializeThunkCreator }), withRouter)(App);

let RealApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default RealApp;