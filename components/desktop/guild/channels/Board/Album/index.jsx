import React from 'react';
import Link from 'next/link';
import style from 'css/desktop.module.css';

const Album = () => {
    return (
        <>
            <div className={style.layout_box}>
                <header className={style.head}>
                    <h2>앨범 게시판 제목</h2>
                    <div className={style.search_wrap}>
                        <div className={style.select_box}>
                            <select>
                                <option>제목</option>
                            </select>
                        </div>
                        <div className={style.search_box}>
                            <input type="text" placeholder="검색어를 입력해주세요." maxLength={20}/>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.002" height="15.984"
                                     viewBox="0 0 16.002 15.984">
                                    <g id="search-svgrepo-com_1_" data-name="search-svgrepo-com (1)"
                                       transform="translate(0.002 -0.066)">
                                        <path id="패스_2" data-name="패스 2"
                                              d="M6.553,13.166a6.526,6.526,0,0,0,3.637-1.107l3.764,3.769a.783.783,0,0,0,1.092,0l.732-.733a.785.785,0,0,0,0-1.093L12,10.247a6.55,6.55,0,1,0-5.448,2.919Zm0-10.545A3.986,3.986,0,1,1,2.57,6.608,3.986,3.986,0,0,1,6.553,2.621Z"
                                              fill="#a6a8ad">
                                        </path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Link href="#" className={[style.btn, style.btn_primary].join(' ')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                            <g id="edit-pen-write-svgrepo-com" transform="translate(-4 -1.879)">
                                <path id="패스_5" data-name="패스 5"
                                      d="M15.319,2.5a2.472,2.472,0,0,0-3.286,0L5.254,8.729a2.015,2.015,0,0,0-.587.953l-.644,2.367a.646.646,0,0,0,.2.649.79.79,0,0,0,.707.18L7.5,12.285a2.29,2.29,0,0,0,1.037-.539l6.78-6.225A2.012,2.012,0,0,0,15.319,2.5Z"
                                      transform="translate(0)" fill="#fff"></path>
                                <path id="패스_6" data-name="패스 6"
                                      d="M4,20.745A.745.745,0,0,1,4.744,20H15.165a.745.745,0,0,1,0,1.491H4.744A.745.745,0,0,1,4,20.745Z"
                                      transform="translate(0 -5.612)" fill="#fff"></path>
                            </g>
                        </svg>
                        글쓰기
                    </Link>
                </header>
            </div>

            <div className={style.board_gallery} style={{marginTop : 20}}>
                <ul>
                    <li>
                        <Link href="#">
                            <div className={style.img_wrap}>
                                <img src="/img/no_thumbnail.svg" alt="썸네일"/>
                            </div>

                            <div className={style.txt_wrap}>
                                <span className={style.title}>
                                    게시글의 제목입니다 {/* 한 30글자로 잘라주세요 */}
                                    <span className={style.comment_count}>+1</span>
                                </span>
                                <div className={style.info}>
                                    <div className={style.profile_box}>
                                        <div className={style.lv_icon}>
                                            <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급"/>
                                        </div>
                                        <span className={style.nick}>닉네임</span>
                                    </div>
                                    <div className={style.opt}>
                                        <span>07-29</span>
                                        <span>조회 398</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className={style.paging_link}>
                    <div className={style.paging_wrap}>
                        <ul>
                            <li>
                                <span className={style.current}>1</span>
                            </li>
                            <li><Link href="#">2</Link></li>
                            <li><Link href="#">3</Link></li>
                            <li><Link href="#">4</Link></li>
                            <li><Link href="#">5</Link></li>
                            <li><Link href="#">6</Link></li>
                            <li><Link href="#">7</Link></li>
                            <li><Link href="#">8</Link></li>
                            <li><Link href="#">9</Link></li>
                            <li><Link href="#">10</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Album;
