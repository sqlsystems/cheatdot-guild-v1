import React, { memo } from 'react';
import style from 'css/desktop.module.css';

const List = () => {
    return (
        <div className={style.table}>
            <table>
                <caption>관리자 리스트</caption>
                <colgroup>
                    <col width={60} />
                    <col width={150} />
                    <col width={200} />
                    <col />
                    <col width={80} />
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
                            <label htmlFor="chk_01" />
                        </div>
                    </td>
                    <td className={style.left}>
                        <span>ohmygod1234</span>
                    </td>
                    <td className={style.left}>
                        <div className={style.profile}>
                            <div className={style.profile_box}>
                                <div className={style.lv_icon}>
                                    <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급" />
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
                            <input type="checkbox" id="chk_02" />
                            <label htmlFor="chk_02" />
                        </div>
                    </td>
                    <td className={style.left}>
                        <span>ohmygod1234</span>
                    </td>
                    <td className={style.left}>
                        <div className={style.profile}>
                            <div className={style.profile_box}>
                                <div className={style.lv_icon}>
                                    <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급" />
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
                            <input type="checkbox" id="chk_03" />
                            <label htmlFor="chk_03" />
                        </div>
                    </td>
                    <td className={style.left}>
                        <span>ohgood</span>
                    </td>
                    <td className={style.left}>
                        <div className={style.profile}>
                            <div className={style.profile_box}>
                                <div className={style.lv_icon}>
                                    <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급" />
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
    );
}

export default memo(List);
