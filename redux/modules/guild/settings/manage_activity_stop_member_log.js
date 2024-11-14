import { createAction, handleActions } from 'redux-actions';

const SET_DATA = 'guild/settings/manage_activity_stop_member_log/SET_DATA';
const SET_PARAMS = 'guild/settings/manage_activity_stop_member_log/SET_PARAMS';

export const setData = createAction(SET_DATA);
export const setParams = createAction(SET_PARAMS);

const initialState = {
    list: [],
    params: {
        page: 1,
        sfl: 'mb_id',
        stx: '',
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
    }
}, initialState);
