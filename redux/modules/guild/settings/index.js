import { combineReducers } from 'redux';
import member from './member';
import activity_stop from './activity_stop';

export default combineReducers({
    member,
    activity_stop: activity_stop,
});
