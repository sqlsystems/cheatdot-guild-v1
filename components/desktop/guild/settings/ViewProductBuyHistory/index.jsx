import React, { memo } from 'react'
import style from 'css/desktop.module.css';

const ViewProductBuyHistory = () => {
    return (
        <>
            <div className={style.head_tit}>
                <h2>상품구매 기록</h2>
            </div>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
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
                            <caption>상품구매 기록 리스트</caption>
                            <colgroup>
                                <col width={80}/>
                                <col width={160}/>
                                <col/>
                                <col width={80}/>
                                <col width={120}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th>번호</th>
                                <th>구매자</th>
                                <th>상품명</th>
                                <th>수량</th>
                                <th>구매일</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <span>1</span>
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
                                <td>
                                    <span>상품명</span>
                                </td>
                                <td>
                                    <span>1</span>
                                </td>
                                <td>
                                    <span>2024.01.10</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className={style.paging_wrap}>페이징</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ViewProductBuyHistory);
