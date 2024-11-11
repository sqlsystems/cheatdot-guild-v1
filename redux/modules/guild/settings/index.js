import { combineReducers } from 'redux';
import member from './member';
import activityStop from './activity_stop_member';

export default combineReducers({
    member,
    activityStop,
});
