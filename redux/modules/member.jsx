import { createAction, handleActions } from 'redux-actions';

const GET_MY_INFO = 'member/GET_MY_INFO';
const UPDATE_MEMBER_DATA = 'member/UPDATE_MEMBER_DATA';

export const getMyInfo = createAction(GET_MY_INFO);
export const updateMemberData = createAction(UPDATE_MEMBER_DATA);

const initialState = {
    info: {},
};

export default handleActions({
    [GET_MY_INFO]: (state, { payload }) => {
        return {
            ...state,
            info: !payload.data.error.msg && payload.data.message.result,
        }
    },
    [UPDATE_MEMBER_DATA]: (state, action) => {
        return {
            ...state,
            info: {
                ...state.info,
                ...action.payload
            }
        }
    },
}, initialState);
