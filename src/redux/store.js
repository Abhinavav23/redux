import {createStore, combineReducers } from 'redux';
import { JeanReducer } from './Jean/JeanReducer';
import {shirtReducer} from './shirt/shirtReducer';
const combinedReducer = combineReducers({
    shirt: shirtReducer,
    jean: JeanReducer
})
export const store = createStore(combinedReducer)

