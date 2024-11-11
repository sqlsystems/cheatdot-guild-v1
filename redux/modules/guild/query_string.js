import { handleActions } from 'redux-actions';
import { cleanXssTags, cutStr, getSearchString } from 'lib/common';

const UPDATE_DATA = 'guild/query_string/UPDATE_DATA';

const initialState = {
    qstr: '',
    sca: '',
    sfl: '',
    stx: '',
    sop: '',
    spt: '',
    page: 0,
    sst: '',
    sod: '',
    w: '',
    id: 0,
    channel: '',
    channel_id: ''
};

export default handleActions({
    [UPDATE_DATA]: (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    }
}, initialState);

export const updateQueryString = (e) => dispatch => {
    let qstr = '';

    let sca = '';
    let sfl = '';
    let stx = '';
    let sop = '';
    let spt = '';
    let page = '';
    let sst = '';
    let sod = '';
    let w = '';
    let id = 0;

    if (e.sca) {
        const _sca = cleanXssTags(e.sca.trim()).replace(/[\<\>\'\"\\\'\\\"\%\=\(\)\/\^\*]/g, '');
        if (_sca) {
            qstr += `&sca=${encodeURIComponent(_sca)}`;
            sca = _sca;
        }
    }

    if (e.sfl) {
        let _sfl = e.sfl.trim().replace(/[\<\>\'\"\\\'\\\"\%\=\(\)\/\^\*\s]/g, '');
        if (_sfl) {
            qstr += `&sfl=${encodeURIComponent(_sfl)}`;
            sfl = _sfl;
        }
    }

    if (e.stx) {
        let _stx = getSearchString(e.stx.trim());
        if (_stx || _stx === '0') {
            qstr += `&stx=${encodeURIComponent(cutStr(_stx, 20, ''))}`;
            stx = _stx;
        }
    }

    if (e.sst) {
        let _sst = e.sst.trim().replace(/[\<\>\'\"\\\'\\\"\%\=\(\)\/\^\*\s]/g, '');
        if (_sst) {
            qstr += `&sst=${encodeURIComponent(_sst)}`;
            sst = _sst;
        }
    }

    if (e.sod) {
        sod = ["asc", "desc"].includes(e.sod.toLowerCase()) ? e.sod : '';
        if (sod) {
            qstr += `&sod=${encodeURIComponent(sod)}`;
        }
    }

    if (e.sop) {
        sop = ["or", "and"].includes(e.sop.toLowerCase()) ? e.sop : '';
        if (sop) {
            qstr += `&sop=${encodeURIComponent(sop)}`;
        }
    }

    if (e.spt) {
        spt = parseInt(e.spt);
        if (spt) {
            qstr += `&spt=${encodeURIComponent(spt)}`;
        }
    }

    if (e.page) {
        page = parseInt(e.page);
        if (page) {
            qstr += `&page=${encodeURIComponent(page)}`;
        }
    } else {
        page = 1;
    }

    if (e.w) {
        w = e.w.slice(0, 2);
    }

    if (e.id) {
        id = parseInt(e.id);
    }

    dispatch({
        type: UPDATE_DATA,
        payload: {
            qstr: qstr,
            sca: sca,
            sfl: sfl,
            stx: stx,
            sop: sop,
            spt: spt,
            page: page,
            sst: sst,
            sod: sod,
            w: w,
            id: id,
            channel: e.channel,
            channel_id: Number(e.channel_id),
        }
    });
}
