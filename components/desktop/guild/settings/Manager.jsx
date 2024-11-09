import React from 'react';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';

const Manager = () => {
    return (
        <>
            <ConfigTitle title="관리자 설정">
                <p>관리자로 지정된 멤버는 관리자 설정, 길드 삭제를 제외한 모든 메뉴를 관리할 수 있습니다.</p>
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_black].join(' ')}>선택 삭제</button>
                        </div>
                        <div className={style.search_wrap}>
                            <div className={style.select_box}>
                                <select>
                                    <option>닉네임</option>
                                </select>
                            </div>
                            <div className={style.search_box}>
                                <input type="text" placeholder="검색어를 입력해주세요."/>
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.002" height="15.984"
                                         viewBox="0 0 16.002 15.984">
                                        <g id="search-svgrepo-com_1_" data-name="search-svgrepo-com (1)"
                                           transform="translate(0.002 -0.066)">
                                            <path id="패스_2" data-name="패스 2"
                                                  d="M6.553,13.166a6.526,6.526,0,0,0,3.637-1.107l3.764,3.769a.783.783,0,0,0,1.092,0l.732-.733a.785.785,0,0,0,0-1.093L12,10.247a6.55,6.55,0,1,0-5.448,2.919Zm0-10.545A3.986,3.986,0,1,1,2.57,6.608,3.986,3.986,0,0,1,6.553,2.621Z"
                                                  fill="#a6a8ad"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={style.table}>
                        <table>
                            <caption>관리자 리스트</caption>
                            <colgroup>
                                <col width={60}/>
                                <col width={150}/>
                                <col width={200}/>
                                <col/>
                                <col width={80}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th>선택</th>
                                <th>아이디</th>
                                <th>닉네임</th>
                                <th>항목</th>
                                <th>권한</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {/* 내용이 없을때 시작 */}
                                {/*<td colSpan={4}>*/}
                                {/*    <p className={style.empty}>내용이 없습니다.</p>*/}
                                {/*</td>*/}
                                {/* 내용이 없을때 끝 */}
                            </tr>
                            <tr className={style.check}> {/* 체크박스 선택하면 tr에 check 클래스 붙여주세요. 선택한게 여러개일때 잘 구분되게 하기 위함 */}
                                <td>
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id="chk_01" checked={true} />
                                        <label htmlFor="chk_01"/>
                                    </div>
                                </td>
                                <td className={style.left}>
                                    <span>ohmygod1234</span>
                                </td>
                                <td className={style.left}>
                                    <div className={style.profile}>
                                        <div className={style.profile_box}>
                                            <div className={style.lv_icon}>
                                                <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급"/>
                                            </div>
                                            <span className={style.nick}>회원닉네임회원닉네임</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={style.left}>
                                    <span>기본 환경설정</span>
                                </td>
                                <td>
                                    <span>읽기</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id="chk_02"/>
                                        <label htmlFor="chk_02"/>
                                    </div>
                                </td>
                                <td className={style.left}>
                                    <span>ohmygod1234</span>
                                </td>
                                <td className={style.left}>
                                    <div className={style.profile}>
                                        <div className={style.profile_box}>
                                            <div className={style.lv_icon}>
                                                <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급"/>
                                            </div>
                                            <span className={style.nick}>회원닉네임</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={style.left}>
                                    <span>기본 환경설정</span>
                                </td>
                                <td>
                                    <span>읽기</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id="chk_03"/>
                                        <label htmlFor="chk_03"/>
                                    </div>
                                </td>
                                <td className={style.left}>
                                    <span>ohgood</span>
                                </td>
                                <td className={style.left}>
                                    <div className={style.profile}>
                                        <div className={style.profile_box}>
                                            <div className={style.lv_icon}>
                                                <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급"/>
                                            </div>
                                            <span className={style.nick}>회원닉네임</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={style.left}>
                                    <span>게시판 관리</span>
                                </td>
                                <td>
                                    <span>쓰기</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={style.admin_add}>
                    <div className={style.head}>
                        <h3>관리권한 추가</h3>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_primary].join(' ')}>권한 추가</button>
                        </div>
                    </div>

                    <div className={style.col3}>
                        <div className={style.item}>
                            <div className={style.tit_box}>
                                <span className={style.tit}>회원 아이디</span>
                            </div>
                            <div className={style.cont}>
                                <div className={style.input_box}>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.tit_box}>
                                <span className={style.tit}>접근 가능 메뉴</span>
                            </div>
                            <div className={style.cont}>
                                <div className={style.select_box}>
                                    <select>
                                        <option>기본환경설정</option>
                                        <option>등등</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.tit_box}>
                                <span className={style.tit}>권한 지정</span>
                            </div>
                            <div className={style.cont}>
                                <div className={style.chk_wrap}>
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id="admin_auth_01"/>
                                        <label htmlFor="admin_auth_01">읽기</label>
                                    </div>
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id="admin_auth_02"/>
                                        <label htmlFor="admin_auth_02">쓰기</label>
                                    </div>
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id="admin_auth_03"/>
                                        <label htmlFor="admin_auth_03">삭제</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Manager;
