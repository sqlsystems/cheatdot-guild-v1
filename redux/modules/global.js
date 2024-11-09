import { createAction, handleActions } from 'redux-actions';

const SET_INIT_DATA = 'global/SET_INIT_DATA';
const SET_DEVICE_INFO = 'global/SET_DEVICE_INFO';
const SET_USER_LAYER = 'global/SET_USER_LAYER';

export const setInitData = createAction(SET_INIT_DATA);
export const setDeviceInfo = createAction(SET_DEVICE_INFO);
export const setUserLayer = createAction(SET_USER_LAYER);

const initialState = {
    init: {},
    device_info: {},
    user_layer: {},
};

export default handleActions({
    [SET_INIT_DATA]: (state, action) => {
        return {
            ...state,
            init: action.payload
        }
    },
    [SET_DEVICE_INFO]: (state, action) => {
        return {
            ...state,
            device_info: action.payload
        }
    },
    [SET_USER_LAYER]: (state, action) => {
        return {
            ...state,
            user_layer: action.payload
        }
    },
}, initialState);
