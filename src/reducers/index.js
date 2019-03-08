import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import apiCallReducer from './api_call_reducer';

export default combineReducers({
    apiCall: apiCallReducer,
    form: formReducer
})