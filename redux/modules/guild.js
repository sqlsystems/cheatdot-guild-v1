import { createAction, handleActions } from 'redux-actions';

const SET_INIT_DATA = 'guild/SET_INIT_DATA';
const SET_CREATE_CHANNEL_MODAL = 'guild/SET_CREATE_CHANNEL_MODAL';
const ADD_CATEGORY = 'guild/ADD_CATEGORY';
const ADD_CHANNEL = 'guild/ADD_CHANNEL';
const SET_CHANNEL_DATA = 'guild/SET_CHANNEL_DATA';
const SET_CHANNEL_SETTING_DATA = 'guild/SET_CHANNEL_SETTING_DATA';
const SET_SETTING_CONFIRM = 'guild/SET_SETTING_CONFIRM';
const SET_CHANNEL_BOARD_DATA = 'guild/SET_CHANNEL_BOARD_DATA';
const SET_STORE_CHANNEL_SETTING = 'guild/SET_STORE_CHANNEL_SETTING';
const SET_METADATA = 'guild/SET_METADATA';

export const setInitData = createAction(SET_INIT_DATA);
export const setCreateChannelModal = createAction(SET_CREATE_CHANNEL_MODAL);
export const addCategory = createAction(ADD_CATEGORY);
export const addChannel = createAction(ADD_CHANNEL);
export const setChannelData = createAction(SET_CHANNEL_DATA);
export const setChannelSettingData = createAction(SET_CHANNEL_SETTING_DATA);
export const setSettingConfirm = createAction(SET_SETTING_CONFIRM);
export const setChannelBoardData = createAction(SET_CHANNEL_BOARD_DATA);
export const setStoreChannelSetting = createAction(SET_STORE_CHANNEL_SETTING);
export const setMetaData = createAction(SET_METADATA);

const initialState = {
    res_data: {
        error: {},
        menus: {},
        guild_info: {},
        flags: {},
        current_channel_data: {}
    },
    is_create_channel_modal: {
        category_id: null,
    },
    channel_setting_data: {},
    is_setting_confirm: false,
    store_channel_setting: {
        idx: 0
    },
    metadata: {
        title: '',
        og_title: ''
    }
};

export default handleActions({
    [SET_INIT_DATA]: (state, action) => {
        return {
            ...state,
            res_data: {
                ...state.res_data,
                error: action.payload.error,
                ...action.payload.message.result
            }
        }
    },
    [SET_CREATE_CHANNEL_MODAL]: (state, action) => {
        return {
            ...state,
            is_create_channel_modal: action.payload ? action.payload : { category_id: -1 }
        }
    },
    [ADD_CATEGORY]: (state, action) => {
        return {
            ...state,
            menus: [...state.menus, action.payload]
        }
    },
    [ADD_CHANNEL]: (state, action) => {
        const { category_id, ...newMenuItem } = action.payload;

        const newState = {
            ...state,
            res_data: {
                ...state.res_data,
                menus: {
                    ...state.res_data.menus,
                    [category_id]: {
                        ...state.res_data.menus[category_id],
                        submenu: [
                            ...state.res_data.menus[category_id].submenu,
                            newMenuItem
                        ]
                    }
                }
            }
        };

        return newState;
    },
    [SET_CHANNEL_DATA]: (state, action) => {
        return {
            ...state,
            res_data: {
                ...state.res_data,
                current_channel_data: action.payload
            }
        }
    },
    [SET_CHANNEL_SETTING_DATA]: (state, action) => {
        return {
            ...state,
            channel_setting_data: action.payload
        }
    },
    [SET_SETTING_CONFIRM]: (state, { payload }) => {
        return {
            ...state,
            is_setting_confirm: payload
        }
    },
    [SET_CHANNEL_BOARD_DATA]: (state, { payload }) => {
        return {
            ...state,
            res_data: {
                ...state.res_data,
                board_data: {
                    ...state.res_data.board_data,
                    [payload.channel_id]: {
                        ...state.res_data.board_data[payload.channel_id],
                        ...payload.data
                    }
                }
            }
        }
    },
    [SET_STORE_CHANNEL_SETTING]: (state, { payload }) => {
        return {
            ...state,
            store_channel_setting: {
                ...state.store_channel_setting,
                ...payload
            }
        }
    },
    [SET_METADATA]: (state, { payload }) => {
        return {
            ...state,
            metadata: {
                ...state.metadata,
                ...payload
            }
        }
    }
}, initialState);

export const guildHandler = (e) => (dispatch, getState) => {
    switch (e.event) {
        case 'create_category':
            dispatch(addCategory(e.data));
            break;
        case 'create_category_channel':
            dispatch(addChannel(e.data));
            break;
    }
}
