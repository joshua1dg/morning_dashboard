import {combineReducers} from 'redux';
import locationReducer from './location_reducer';

export default combineReducers({
    location: locationReducer
})