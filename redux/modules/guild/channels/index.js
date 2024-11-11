import { combineReducers } from 'redux';
import board from './board';
import store from './store';

export default combineReducers({
    board,
    store,
});
