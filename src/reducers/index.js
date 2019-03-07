import {combineReducers} from 'redux';
import apiCallReducer from './api_call_reducer';

export default combineReducers({
    apiCall: apiCallReducer
})