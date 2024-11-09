import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateChannelModal } from '@redux/modules/guild';
import useClickOutside from 'hooks/useClickOutside';
import style from 'css/desktop.module.css';

const GuildMenu = ({ setSetting, setCreateCategory }) => {
    const dispatch = useDispatch();

    const guildName = useSelector(state => state.guild.res_data.guild_info.name);
    const isAdmin = useSelector(state => state.guild.res_data.flags.is_admin);

    const menuButtonRef = useRef(null);

    const [isMenu, setMenu] = useState(false);

    useClickOutside(menuButtonRef, isMenu, () => setMenu(false));

    return (
        <>
            <button type="button" className={style.btn_top} onClick={() => setMenu(!isMenu)} ref={menuButtonRef}>
                <span>{guildName}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.003" height="8" viewBox="0 0 14.003 8">
                    <path id="XMLID_224_" d="M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0,.689.689,0,0,0,0-.947Z" transform="translate(14.002 83.004) rotate(180)" fill="#8b8f95"/>
                </svg>
            </button>

            {isMenu &&
                <div className={style.guild_menu}>
                    <ul>
                        {isAdmin &&
                            <>
                                <li>
                                    <button type="button" onClick={() => setSetting(true)}>
                                        설정
                                        <svg id="그룹_1597" data-name="그룹 1597" xmlns="http://www.w3.org/2000/svg"
                                             width="18"
                                             height="18" viewBox="0 0 18 18">
                                            <rect id="사각형_9028" data-name="사각형 9028" width="18" height="18"
                                                  fill="rgba(255,255,255,0)"/>
                                            <g id="그룹_1315" data-name="그룹 1315" transform="translate(1 1)">
                                                <rect id="사각형_8812" data-name="사각형 8812" width="16" height="16"
                                                      transform="translate(0)" fill="rgba(255,255,255,0)"/>
                                                <path id="gear-fill" className={style.fill}
                                                      d="M9.4,1.05a1.465,1.465,0,0,0-2.81,0l-.1.34a1.464,1.464,0,0,1-2.1.872l-.31-.17A1.465,1.465,0,0,0,2.093,4.079l.169.311a1.464,1.464,0,0,1-.872,2.1l-.34.1a1.465,1.465,0,0,0,0,2.81l.34.1a1.464,1.464,0,0,1,.872,2.1l-.17.31a1.465,1.465,0,0,0,1.987,1.987l.311-.169a1.464,1.464,0,0,1,2.1.872l.1.34a1.465,1.465,0,0,0,2.81,0l.1-.34a1.464,1.464,0,0,1,2.1-.872l.31.17a1.465,1.465,0,0,0,1.987-1.987l-.169-.311A1.464,1.464,0,0,1,14.61,9.5l.34-.1a1.465,1.465,0,0,0,0-2.81l-.34-.1a1.464,1.464,0,0,1-.872-2.1l.17-.31a1.465,1.465,0,0,0-1.987-1.987l-.311.169A1.464,1.464,0,0,1,9.5,1.39l-.1-.34ZM8,10.93A2.93,2.93,0,1,1,10.929,8,2.93,2.93,0,0,1,8,10.93Z"
                                                      transform="translate(0)"/>
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setCreateCategory(true)}>
                                        카테고리 만들기
                                        <svg id="그룹_1598" data-name="그룹 1598" xmlns="http://www.w3.org/2000/svg"
                                             width="18"
                                             height="18" viewBox="0 0 18 18">
                                            <rect id="사각형_9029" data-name="사각형 9029" width="18" height="18"
                                                  fill="rgba(255,255,255,0)"/>
                                            <path id="제외_3" className={style.fill} data-name="제외 3"
                                                  d="M8,16a8,8,0,1,1,8-8A8.01,8.01,0,0,1,8,16ZM3.625,7.375a.625.625,0,0,0,0,1.25h3.75v3.749a.625.625,0,1,0,1.25,0V8.625h3.75a.625.625,0,0,0,0-1.25H8.625V3.624a.625.625,0,0,0-1.25,0v3.75Z"
                                                  transform="translate(1 1)"/>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => dispatch(setCreateChannelModal())}>
                                        채널 만들기
                                        <svg id="그룹_1598" data-name="그룹 1598" xmlns="http://www.w3.org/2000/svg"
                                             width="18"
                                             height="18" viewBox="0 0 18 18">
                                            <rect id="사각형_9029" data-name="사각형 9029" width="18" height="18"
                                                  fill="rgba(255,255,255,0)"/>
                                            <path id="제외_3" className={style.fill} data-name="제외 3"
                                                  d="M8,16a8,8,0,1,1,8-8A8.01,8.01,0,0,1,8,16ZM3.625,7.375a.625.625,0,0,0,0,1.25h3.75v3.749a.625.625,0,1,0,1.25,0V8.625h3.75a.625.625,0,0,0,0-1.25H8.625V3.624a.625.625,0,0,0-1.25,0v3.75Z"
                                                  transform="translate(1 1)"/>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        초대 코드
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"
                                             viewBox="0 0 20 16">
                                            <path id="패스_48086" className={style.fill} data-name="패스 48086"
                                                  d="M4.5,0A2.5,2.5,0,1,1,2,2.5,2.5,2.5,0,0,1,4.5,0ZM16,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,16,0ZM1.5,6H6.125A4.059,4.059,0,0,0,6,7a4,4,0,0,0,1.353,3H0ZM20,10H19V9H15v1H12.647A3.99,3.99,0,0,0,14,7a4.059,4.059,0,0,0-.125-1H18.5Zm-5,5v1H4l1.5-5H13v4h2ZM7,7a3,3,0,1,1,3,3A3,3,0,0,1,7,7Zm9,3h2v2h2v2H18v2H16V14H14V12h2Z"
                                                  fill="#000000"/>
                                        </svg>
                                    </button>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            }
        </>
    );
}

export default GuildMenu;
