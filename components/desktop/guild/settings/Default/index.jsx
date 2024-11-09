import React, { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { formatAndSetNumber, formatNumberWithComma } from 'lib/common';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import HashTag from './HashTag';
import Confirm from '@guild/components/ConfigConfirm';

const Default = () => {
    const guildInfo = useSelector(state => state.guild.res_data.guild_info);

    const [data, setData] = useState(guildInfo);

    const original = JSON.stringify(guildInfo);
    const virtual = JSON.stringify(data);

    return (
        <>
            <ConfigTitle title="기본설정" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.item}>
                    <div className={style.cont}>
                        <div className={style.img_upload_wrap}>
                            <div className={[style.img_wrap, style.guild_profile].join(' ')}>
                                <span>길드 프로필<br/>이미지가<br/>없습니다.</span> {/* 프로필 없을때 나타나는 글자 / 프로필 있을때는 삭제해주세요 */}
                                <img src="https://i.namu.wiki/i/Vj5qbEFSnNirgU_WzuKbQmLd20hbM6QyNGHb8f87wB4iUuMA-OliDHoQMBnxu7jSowmBl5R-wBKXIb5Voe1bxw.webp" width={120} height={120} alt="길드 프로필 사진" />
                            </div>
                            <div className={style.img_upload}>
                                <div className={style.file_upload}>
                                    <input type="file" id="profile_upload"/>
                                    <label htmlFor="profile_upload" className={[style.btn, style.btn_gray_line].join(' ')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.033" height="16" viewBox="0 0 14.033 16">
                                            <path id="패스_47785" d="M7.549,1.732,7.016,1.2l-.532.532L2.475,5.742l-.532.532L3.007,7.336,3.54,6.8,6.265,4.079v8.11h1.5V4.079L10.493,6.8l.532.532,1.062-1.062-.532-.532ZM1.5,11.938v-.752H0V17.2H14.033V11.186h-1.5V15.7H1.5Z" transform="translate(0 -1.2)"/>
                                        </svg>
                                        이미지 업로드
                                    </label>
                                </div>
                                <p>2MB 이내의 파일<br/>권장 사이즈 : 512x512px</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.cont}>
                        <div className={style.img_upload_wrap}>
                            <div className={[style.img_wrap, style.guild_list_banner].join(' ')}>
                                <span>등록된 길드 배너 이미지가 없습니다.</span> {/* 배너 없을때 나타나는 글자 / 배너 있을때는 삭제해주세요*/}
                                <img src="https://ojsfile.ohmynews.com/STD_IMG_FILE/2015/0320/IE001810708_STD.jpg" alt="배너이미지"/>
                            </div>
                            <div className={style.img_upload}>
                                <div className={style.file_upload}>
                                    <input type="file" id="list_banner_upload"/>
                                    <label htmlFor="list_banner_upload" className={[style.btn, style.btn_gray_line].join(' ')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.033" height="16" viewBox="0 0 14.033 16">
                                            <path id="패스_47785" d="M7.549,1.732,7.016,1.2l-.532.532L2.475,5.742l-.532.532L3.007,7.336,3.54,6.8,6.265,4.079v8.11h1.5V4.079L10.493,6.8l.532.532,1.062-1.062-.532-.532ZM1.5,11.938v-.752H0V17.2H14.033V11.186h-1.5V15.7H1.5Z" transform="translate(0 -1.2)"/>
                                        </svg>
                                        이미지 업로드
                                    </label>
                                </div>
                                <p>2MB 이내의 파일<br/>권장 사이즈 : 1960x360px</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.cont}>
                        <div className={style.img_upload_wrap}>
                            <div className={[style.img_wrap, style.guild_banner].join(' ')}>
                                <span>길드 리스트 배너 이미지가 없습니다.</span> {/* 배너 없을때 나타나는 글자 / 배너 있을때는 삭제해주세요*/}
                                <img src="https://ojsfile.ohmynews.com/STD_IMG_FILE/2015/0320/IE001810708_STD.jpg" alt="배너이미지"/>
                            </div>
                            <div className={style.img_upload}>
                                <div className={style.file_upload}>
                                    <input type="file" id="banner_upload"/>
                                    <label htmlFor="banner_upload" className={[style.btn, style.btn_gray_line].join(' ')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.033" height="16" viewBox="0 0 14.033 16">
                                            <path id="패스_47785" d="M7.549,1.732,7.016,1.2l-.532.532L2.475,5.742l-.532.532L3.007,7.336,3.54,6.8,6.265,4.079v8.11h1.5V4.079L10.493,6.8l.532.532,1.062-1.062-.532-.532ZM1.5,11.938v-.752H0V17.2H14.033V11.186h-1.5V15.7H1.5Z" transform="translate(0 -1.2)"/>
                                        </svg>
                                        이미지 업로드
                                    </label>
                                </div>
                                <p>2MB 이내의 파일<br/>권장 사이즈 : 610x300px</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>길드 이름</span>
                    </div>
                    <div className={style.cont}>
                        <div className={[style.input_box, style.have_count].join(' ')}>
                            <input type="text" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="길드명" maxLength={15} />

                            <span className={style.count}>
                                <span>{data.name.length}</span>/15
                            </span>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>길드 가입비 (단위/CP)</span>
                        <p className={style.explain}>길드 가입비를 받지 않으려면 빈칸으로 입력해 주세요.</p>
                    </div>
                    <div className={style.cont}>
                        <div className={[style.input_box, style.cp].join(' ')}>
                            <input
                                type="text"
                                value={data.attend_price ? formatNumberWithComma(data.attend_price) : ''}
                                onChange={(e) => formatAndSetNumber(e, setData, 'attend_price')}
                                placeholder="100"
                            />
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>길드 공개</span>
                    </div>
                    <div className={style.cont}>
                        <div className={style.radio_box1}>
                            <input type="checkbox" id="is_attend_public" onChange={e => setData({ ...data, is_attend_public: e.target.checked })} checked={data.is_attend_public} />
                            <label htmlFor="is_attend_public">멤버에게만 보이기</label>
                        </div>
                    </div>
                </div>

                <HashTag hashTag={data.hash_tag} setData={e => setData({ ...data, hash_tag: e })} />

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>가입 방식</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.radio_wrap}>
                            <div className={style.radio_box1}>
                                <input
                                    type="radio"
                                    id="in"
                                    name="is_attend_pending"
                                    onChange={() => setData({ ...data, is_pending_attend: false })}
                                    checked={!data.is_pending_attend}
                                />
                                <label htmlFor="in">가입 신청시 바로 가입</label>
                            </div>
                            <div className={style.radio_box1}>
                                <input
                                    type="radio"
                                    id="out"
                                    name="is_attend_pending"
                                    onChange={() => setData({ ...data, is_pending_attend: true })}
                                    checked={data.is_pending_attend}
                                />
                                <label htmlFor="out">가입 신청 시 관리자 승인을 거쳐 가입</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Confirm
                original={original}
                virtual={virtual}
                resetData={() => setData(guildInfo)}
            />
        </>
    );
}

export default memo(Default);
