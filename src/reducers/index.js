import { combineReducers } from 'redux';
import basketReducer from './basketReducer';

// Turns an object whose values are different reducer functions, into a single reducer function. 
export default combineReducers({
 basketState: basketReducer,
});