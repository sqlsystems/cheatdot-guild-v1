import { createAction, handleActions } from 'redux-actions';

const SET_INIT_BOARD_DATA = 'guild/board/SET_INIT_BOARD_DATA';

export const setInitBoardData = createAction(SET_INIT_BOARD_DATA);

const initialState = {
    error: {},
    message: {}
};

export default handleActions({
    [SET_INIT_BOARD_DATA]: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    }
}, initialState);
