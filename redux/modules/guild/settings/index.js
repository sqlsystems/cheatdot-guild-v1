import { combineReducers } from 'redux';
import member from './member';
import activity_stop from './activity_stop';
import activity_stop_log from './activity_stop_log';

export default combineReducers({
    member,
    activity_stop,
    activity_stop_log,
});
