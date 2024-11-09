import { createAction, handleActions } from 'redux-actions';

const UPDATE_OPENGRAPH = 'opengraph/UPDATE_OPENGRAPH';

export const updateOpenGraph = createAction(UPDATE_OPENGRAPH);

const initialState = {
    description: '치트닷컴, 치닷, 게임 커뮤니티, 커뮤니티, 게임포럼, 게임포털, 게임 사이트, 게임 정보 사이트',
    add_description: '',
    keywords: '치트닷컴, 치닷, 게임 커뮤니티, 커뮤니티, 게임포럼, 게임포털, 게임 사이트, 게임 정보 사이트',
    add_keywords: '',
    og_title: '치트닷컴 게임 커뮤니티',
    og_description: '치트닷컴, 게임 커뮤니티의 중심! 게임의 대한 정보가 한곳에 있습니다.',
    og_url: 'https://cheatdot.com',
    add_og_url: '',
    og_image: '/opengraph/ogimage.png'
};

export default handleActions({
    [UPDATE_OPENGRAPH]: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    }
}, initialState);
