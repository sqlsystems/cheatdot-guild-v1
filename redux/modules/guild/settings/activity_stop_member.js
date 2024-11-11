import { createAction, handleActions } from 'redux-actions';

const SET_DATA = 'guild/settings/activity_stop_member/SET_DATA';
const SET_PARAMS = 'guild/settings/activity_stop_member/SET_PARAMS';

export const setData = createAction(SET_DATA);
export const setParams = createAction(SET_PARAMS);

const initialState = {
    error: {},
    message: {},
    params: {
        page: 1,
        sfl: 'mb_id',
        stx: '',
        chk: []
    }
};

export default handleActions({
    [SET_DATA]: (state, { payload }) => {
        return {
            ...state,
            ...payload
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
    }
}, initialState);
