import { combineReducers } from 'redux';

import global from './global';
import member from './member';
import alert from './alert';
import opengraph from './opengraph';
import guild from './guild';
import guildReducers from './guild/reducers';

export default combineReducers({
    global,
    member,
    alert,
    opengraph,
    guild,
    ...guildReducers,
});
