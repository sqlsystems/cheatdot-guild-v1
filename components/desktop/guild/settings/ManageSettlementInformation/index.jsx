import React, { memo } from 'react';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';

const ManageSettlementInformation = () => {
    return (
        <>
            <ConfigTitle title="정산 정보" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={[style.layout_box, style.file_area].join(' ')}>
                    <div>
                        <div className={style.tit}>
                            <span>신분증 사본(필수)</span>
                            <em>* 이미지 파일만 가능</em>
                        </div>

                        <div className={style.file_input}>
                            <input type="file" className={style.file_input} id="id_card"
                                   accept="image/jpg, image/gif, image/bmp, image/png"/>
                            {/*<span className={style.file_name}>파일명.png</span>*/}
                            {/*<button type="button" className={style.btn_delete}>*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 7.002 7.002">*/}
                            {/*        <path id="x"*/}
                            {/*              d="M4.646,4.646a.5.5,0,0,1,.708,0L8,7.293l2.646-2.647a.5.5,0,0,1,.708.708L8.707,8l2.647,2.646a.5.5,0,0,1-.708.708L8,8.707,5.354,11.354a.5.5,0,1,1-.708-.708L7.293,8,4.646,5.354a.5.5,0,0,1,0-.708Z"*/}
                            {/*              transform="translate(-4.499 -4.499)" fill="#a6a8ad"/>*/}
                            {/*    </svg>*/}
                            {/*</button>*/}
                            <label htmlFor="id_card">파일첨부</label>
                        </div>
                    </div>

                    <div>
                        <div className={style.tit}>
                            <span>통장사본(필수)</span>
                            <em>* 이미지 파일만 가능</em>
                        </div>

                        <div className={style.file_input}>
                            <input type="file" className={style.file_input} id="bank_book"
                                   accept="image/jpg, image/gif, image/bmp, image/png"/>
                            <span className={style.file_name}>통장사본.png</span>
                            <button type="button" className={style.btn_delete}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 7.002 7.002">
                                    <path id="x"
                                          d="M4.646,4.646a.5.5,0,0,1,.708,0L8,7.293l2.646-2.647a.5.5,0,0,1,.708.708L8.707,8l2.647,2.646a.5.5,0,0,1-.708.708L8,8.707,5.354,11.354a.5.5,0,1,1-.708-.708L7.293,8,4.646,5.354a.5.5,0,0,1,0-.708Z"
                                          transform="translate(-4.499 -4.499)" fill="#a6a8ad"/>
                                </svg>
                            </button>
                            {/*<label htmlFor="bank_book">파일첨부</label>*/}
                        </div>
                    </div>
                </div>

                <div className={style.layout_box} style={{marginTop: 20}}>
                    <div className={[style.explain_wrap, style.agree_box].join(' ')}>
                        <div>
                            <h3>제 1 조 회원정보의 보호 및 이용</h3>
                            <ul>
                                <li>
                                    <p>
                                        ① 회사는 별 환전의 목적으로 회원의 동의 하에 관계 법령에서 정하는 바에 따라 개인정보를 수집할 수 있습니다.<br/>(수집된 개인정보는
                                        담당자 확인
                                        및 세금신고후 폐기처리됩니다.)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ② 회사는 법률에 특별한 규정이 있는 경우를 제외하고는 회원의 별도 동의 없이 회원의 계정정보를 포함한 일체의 개인정보를 제 3자에게 공개하거나
                                        제공하지
                                        아니합니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>제 2 조 회원정보의 보호 및 이용</h3>
                            <ul>
                                <li><p>1. 회원은 다음 각 호에 해당하는 행위를 해서는 안됩니다.</p></li>
                                <li><p>① 환전 신청 또는 회원정보 변경 시 허위내용 등록</p></li>
                                <li><p>② 타인의 정보도용</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.submit_box}>
                        <div className={style.chk_box}>
                            <input type="checkbox" id="chk_01"/>
                            <label htmlFor="chk_01">위 내용을 읽고 내용에 동의합니다.</label>
                        </div>

                        <button type="button" className={[style.btn, style.btn_primary].join(' ')}>환전신청</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ManageSettlementInformation);
