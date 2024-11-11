import { createAction, handleActions } from 'redux-actions';

const SET_INIT_BOARD_LIST = 'guild/board/SET_INIT_BOARD_LIST';

export const setInitBoardList = createAction(SET_INIT_BOARD_LIST);

const initialState = {
    list: {
        error: {},
        message: {}
    },
    view: {
        error: {},
        message: {}
    },
    write: {
        error: {},
        message: {}
    }
};

export default handleActions({
    [SET_INIT_BOARD_LIST]: (state, { payload }) => {
        return {
            ...state,
            list: {
                ...state.list,
                ...payload
            }
        }
    }
}, initialState);
