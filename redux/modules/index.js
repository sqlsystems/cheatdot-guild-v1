import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import guild from './guild';

export default combineReducers({
    guild,
    pender: penderReducer,
});
