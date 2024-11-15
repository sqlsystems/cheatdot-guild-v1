import React, { memo, useRef } from 'react';
import style from 'css/desktop.module.css';

const ListItem = (props) => {
    const btnRef = useRef(null);

    const c = props.data;

    return (
        <tr className={props.checkedItems[c.mb_id] ? style.check : null}>
            <td>
                <div className={style.chk_box}>
                    <div className={style.chk_box}>
                        <input type="checkbox" checked={!!props.checkedItems[c.mb_id]} onChange={() => props.handleItemChange(c.mb_id)} id={c.mb_id} />
                        <label htmlFor={c.mb_id} />
                    </div>
                </div>
            </td>
            <td className={style.left}>
                <span>{c.mb_nick} ({c.mb_id})</span>
            </td>
            <td>
                <div className={style.opt_wrap}>
                    <button type="button" className={style.opt_open} onClick={() => props.setBtnRef(btnRef)} ref={btnRef}>
                        <svg width="2.5" height="14.6" viewBox="0 0 2.5 14.6">
                            <g id="more-vertical-svgrepo-com" transform="translate(-10.75 -4.7)">
                                <line y2="0.1" transform="translate(12 5.95)" fill="none" stroke="#a6a8ad" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></line>
                                <line data-name="primary-upstroke" y2="0.1" transform="translate(12 11.95)" fill="none" stroke="#a6a8ad" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></line>
                                <line data-name="primary-upstroke" y2="0.1" transform="translate(12 17.95)" fill="none" stroke="#a6a8ad" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></line>
                            </g>
                        </svg>
                    </button>

                    {props._btnRef === btnRef &&
                        <div className={style.pop_layer}>
                            <ul>
                                <li><button type="button" onClick={() => props.addAuthPopup({ mb_id: c.mb_id, auth: c.auth })}>권한 수정</button></li>
                            </ul>
                        </div>
                    }
                </div>
            </td>
        </tr>
    );
}

export default memo(ListItem);
