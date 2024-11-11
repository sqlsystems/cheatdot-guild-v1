import { createAction, handleActions } from 'redux-actions';

const SET_INIT_DATA = 'guild/store/SET_INIT_DATA';
const SET_VIEW_DATA = 'guild/store/SET_VIEW_DATA';

export const setInitStoreData = createAction(SET_INIT_DATA);
export const setViewData = createAction(SET_VIEW_DATA);

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
    [SET_INIT_DATA]: (state, { payload }) => {
        return {
            ...state,
            list: {
                ...state.list,
                ...payload
            }
        }
    },
    [SET_VIEW_DATA]: (state, { payload }) => {
        return {
            ...state,
            view: {
                ...state.view,
                ...payload
            }
        }
    }
}, initialState);
