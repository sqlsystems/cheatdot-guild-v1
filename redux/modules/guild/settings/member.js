import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as api from 'api/guild';

const GET_MEMBERS = 'guild/settings/member/GET_MEMBERS';
const SET_PARAMS = 'guild/settings/member/SET_PARAMS';

export const getMembers = createAction(GET_MEMBERS, api.getMemberList);
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
    ...pender({
        type: GET_MEMBERS,
        onSuccess: (state, action) => {
            return {
                ...state,
                ...action.payload.data.message.result
            }
        }
    }),
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
