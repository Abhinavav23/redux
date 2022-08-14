import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { JeanReducer } from './Jean/JeanReducer';
import { loginReducer } from './login/loginReducer';
import {shirtReducer} from './shirt/shirtReducer';
const combinedReducer = combineReducers({
    shirt: shirtReducer,
    jean: JeanReducer,
    userInfo: loginReducer
})
export const store = createStore(combinedReducer, applyMiddleware(thunk))