import React, { memo, useRef } from 'react';
import dynamic from 'next/dynamic';
import style from 'css/desktop.module.css';

const ReviewForm = dynamic(() => import('./ReviewForm'), { ssr: false });

const ReviewListItem = (props) => {
    const btnRef = useRef();

    return (
        <article className={props.review_reply ? style.reply : null}>
            <div className={style.img}>
                <img src="/img/no_profile.svg" width={50} height={50} alt="회원프로필" className={style.profile_img}/>
                {/*<span className={style.seller}>판매자</span>*/}
            </div>

            <div className={style.cont}>
                <div className={style.name}>
                    <button type="button" className={style.profile_box}>
                        <div className={style.lv_icon}>
                            <img src="/img/level/v2/2.svg" width={24} height={24} alt="회원계급" />
                        </div>
                        <span className={style.nick}>{props.mb_nick}</span>
                    </button>

                    <div className={style.star_box}>
                        <span className={style.bg}>
                            <div className={style.star}/>
                            <span className={style.bar} style={{ width: `${props.rating_percent}%` }}/>
                        </span>
                        <span>{props.rating}</span>
                    </div>
                </div>

                <div className={style.comment}>
                    {props.idx !== props.reviewIds.edit ?
                        <p dangerouslySetInnerHTML={{ __html: props.content.replaceAll('\n', '<br />') }} />
                        :
                        <ReviewForm w="cu" reviewId={props.idx} content={props.content} onClick={() => props.setReviewIds({ edit: 0 })} />
                    }
                </div>

                <div className={style.info}>
                    <span className={style.date}>{props.date}</span>
                </div>

                {props.is_reply &&
                    <div className={style.btn_wrap}>
                        <button
                            type="button"
                            className={[style.btn, style.btn_gray_line].join(' ')}
                            onClick={() => props.reviewIds.reply !== props.idx ? props.setReviewIds({ reply: props.idx }) : props.setReviewIds({ reply: 0 })}
                        >
                            {props.reviewIds.reply === props.idx ? '취소' : '답글'}
                        </button>
                        {/*<button type="button" className={[style.btn, style.btn_gray_line].join(' ')}>채팅하기</button>*/}
                    </div>
                }

                {props.idx === props.reviewIds.reply && <ReviewForm reviewId={props.idx} w="c" />}
            </div>

            <div className={style.opt_wrap}>
                {(props.is_reply || props.is_del || props.is_edit) &&
                    <button type="button" className={style.opt_open} onClick={() => props.setCommentEtcData({ref: btnRef})} ref={btnRef}>
                        <svg width="2.5" height="14.6" viewBox="0 0 2.5 14.6">
                            <g id="more-vertical-svgrepo-com" transform="translate(-10.75 -4.7)">
                            <line y2="0.1" transform="translate(12 5.95)" fill="none" stroke="#a6a8ad"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></line>
                                <line data-name="primary-upstroke" y2="0.1" transform="translate(12 11.95)"
                                      fill="none" stroke="#a6a8ad" strokeLinecap="round"
                                      strokeLinejoin="round" strokeWidth="2.5"></line>
                                <line data-name="primary-upstroke" y2="0.1" transform="translate(12 17.95)"
                                      fill="none" stroke="#a6a8ad" strokeLinecap="round"
                                      strokeLinejoin="round" strokeWidth="2.5"></line>
                            </g>
                        </svg>
                    </button>
                }

                {(props.commentItemEtc.ref === btnRef && (props.is_reply || props.is_del || props.is_edit)) &&
                    <div className={style.pop_layer}>
                        <ul>
                            {props.is_edit &&
                                <li>
                                    <button type="button" onClick={() => props.setReviewIds({ edit: props.idx })}>수정</button>
                                </li>
                            }
                            {props.is_del &&
                                <li>
                                    <button type="button">삭제</button>
                                </li>
                            }
                        </ul>
                    </div>
                }
            </div>
        </article>
    );
}

export default memo(ReviewListItem);
