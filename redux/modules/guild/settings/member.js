import { createAction, handleActions } from 'redux-actions';

const SET_DATA = 'guild/settings/member/SET_DATA';
const SET_PARAMS = 'guild/settings/member/SET_PARAMS';

export const setData = createAction(SET_DATA);
export const setParams = createAction(SET_PARAMS);

const initialState = {
    params: {
        page: 1,
        list_type: 0,
        sfl: 'mb_nick',
        stx: ''
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
