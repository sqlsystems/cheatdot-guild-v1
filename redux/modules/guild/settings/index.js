import { combineReducers } from 'redux';
import member from './member';
import activity_stop from './activity_stop';
import activity_stop_log from './activity_stop_log';
import staff_manage from './staff_manage';
import manage_forced_secession from './manage_forced_secession';

export default combineReducers({
    member,
    activity_stop,
    activity_stop_log,
    staff_manage,
    manage_forced_secession,
});
