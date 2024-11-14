import { createAction, handleActions } from 'redux-actions';

const SET_DATA = 'guild/settings/manage_staff/SET_DATA';
const SET_PARAMS = 'guild/settings/manage_staff/SET_PARAMS';
const SET_ADD_AUTH_POPUP = 'guild/settings/manage_staff/SET_ADD_AUTH_POPUP';

export const setData = createAction(SET_DATA);
export const setParams = createAction(SET_PARAMS);
export const setAddAuthPopup = createAction(SET_ADD_AUTH_POPUP);

const initialState = {
    list: [],
    params: {
        page: 1,
        sfl: 'mb_id',
        stx: '',
    },
    add_auth_popup: {
        is: false,
        data: null
    }
};

export default handleActions({
    [SET_DATA]: (state, { payload }) => {
        return {
            ...state,
            ...payload.message.result
        }
    },
    [SET_PARAMS]: (state, action) => {
        return {
            ...state,
            params: {
                ...state.params,
                ...action.payload
            }
        }
    },
    [SET_ADD_AUTH_POPUP]: (state, { payload }) => {
        return {
            ...state,
            add_auth_popup: payload
        }
    }
}, initialState);
