import { combineReducers } from 'redux';
import manage_whole_member from './manage_whole_member';
import manage_activity_stop_member from './manage_activity_stop_member';
import manage_activity_stop_member_log from './manage_activity_stop_member_log';
import manage_staff from './manage_staff';
import manage_forced_secession from './manage_forced_secession';

export default combineReducers({
    manage_whole_member,
    manage_activity_stop_member,
    manage_activity_stop_member_log,
    manage_staff,
    manage_forced_secession,
});
