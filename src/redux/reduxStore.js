import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./reducer/profileReducer"
import messageReducer from "./reducer/messageReducer"
import sideBarReducer from "./reducer/sideBarReducer"
import usersReducer from "./reducer/usersReducer";
import authReducer from "./reducer/AuthReducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./reducer/AppReducer";

let reducers=combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    sideBarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: AppReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store