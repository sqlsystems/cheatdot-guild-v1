import { createAction, handleActions } from 'redux-actions';

const UPDATE_OBJECT = 'alert/UPDATE_OBJECT';
const ALERT = 'alert/ALERT';
const CLOSE_ALERT = 'alert/CLOSE_ALERT';

export const updateObject = createAction(UPDATE_OBJECT);
export const alert = createAction(ALERT, e => {
    document.body.style.overflowY = 'hidden';

    return e;
});
export const closeAlert = createAction(CLOSE_ALERT, e => {
    document.body.style.overflowY = '';

    return e;
});

const initialState = {
    title: '',
    content: '',
    type: 'alert',
    confirmText: '',
    onConfirm: null,
    onConfirmEnd: null,
    loading: false
};

export default handleActions({
    [UPDATE_OBJECT]: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    },
    [ALERT]: (state, action) => {
        return {
            ...action.payload,
            ...!action.payload.title && { title: '알림' },
            ...!action.payload.type && { type: 'alert' },
        }
    },
    [CLOSE_ALERT]: state => {
        return {
            ...state,
            title: '',
            content: '',
            type: 'alert',
            confirmText: '',
            onConfirm: null,
            onConfirmEnd: null,
        }
    }
}, initialState);
