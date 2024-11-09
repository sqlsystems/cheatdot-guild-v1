import React, { memo, useRef } from 'react';
import style from 'css/desktop.module.css';

const ListItem = ({ item, _btnRef, setBtnRef, setPopupData, changeMemberLevel, setMemberAttendStatus }) => {
    const btnRef = useRef(null);

    return (
        <tr className={!item.attend_status ? style.approve_wait : null}>
            <td>
                <span>{item.idx}</span>
            </td>
            <td className={style.left}>
                <div className={style.profile}>
                    <div className={style.profile_box}>
                        <span className={style.nick}>{item.mb_nick}</span>
                    </div>
                </div>
            </td>
            <td className={style.right}>
                <span className={style.red}>{item.attend_price}</span>
            </td>
            <td>
                <div className={style.num_ratio}>
                    <span className={style.black}>0</span>
                    /
                    <span className={style.black}>0</span>
                </div>
            </td>
            <td>
                <span>{item.attend_date}</span>
            </td>
            <td>
                <div className={style.select_box}>
                    {item.attend_status &&
                        <select style={{ backgroundColor: 'var(--gray-10)' }} onChange={e => changeMemberLevel({ mb_id: item.mb_id, mb_nick: item.mb_nick, changed_level: e.target.value })}>
                            {[...Array(9)].map((_, index) => {
                                return <option key={index} value={index+2}>{index+2}</option>;
                            })}
                        </select>
                    }
                </div>
            </td>
            <td>
                <div className={style.opt_wrap}>
                    <button type="button" className={style.opt_open} onClick={() => setBtnRef(btnRef)} ref={btnRef}>
                        <svg width="2.5" height="14.6" viewBox="0 0 2.5 14.6">
                            <g id="more-vertical-svgrepo-com" transform="translate(-10.75 -4.7)">
                                <line y2="0.1" transform="translate(12 5.95)" fill="none"
                                      stroke="#a6a8ad" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2.5"></line>
                                <line data-name="primary-upstroke" y2="0.1"
                                      transform="translate(12 11.95)" fill="none" stroke="#a6a8ad"
                                      strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2.5"></line>
                                <line data-name="primary-upstroke" y2="0.1"
                                      transform="translate(12 17.95)" fill="none" stroke="#a6a8ad"
                                      strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2.5"></line>
                            </g>
                        </svg>
                    </button>

                    {_btnRef === btnRef &&
                        <div className={style.pop_layer}>
                            <ul>
                                {item.attend_status ?
                                    <>
                                        <li>
                                            <button type="button" onClick={() => setPopupData({ type: 'activity', data: item })}>활동정지</button>
                                        </li>
                                        <li>
                                            <button type="button" onClick={() => setPopupData({ type: 'force', data: item })}>강제탈퇴</button>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <button type="button" onClick={() => setMemberAttendStatus({ mb_id: item.mb_id, mb_nick: item.mb_nick, status_type: '가입승인', status: 1 })}>승인</button>
                                        </li>
                                        <li>
                                            <button type="button" onClick={() => setMemberAttendStatus({ mb_id: item.mb_id, mb_nick: item.mb_nick, status_type: '가입거절', status: 0 })}>거절</button>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    }
                </div>
            </td>
        </tr>
    );
}

export default memo(ListItem);
