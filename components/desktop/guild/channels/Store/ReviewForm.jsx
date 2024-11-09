import React, { memo, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { reviewUpdate } from '@redux/lib/guild/store';
import style from 'css/desktop.module.css';

const ReviewForm = (props) => {
    const dispatch = useDispatch();
    const params = useParams();

    const [wr, setWr] = useState({
        w: props.w,
        idx: Number(params.wr_id),
        review_id: props.reviewId || 0,
        content: props.content || '',
        rating: 2,
    });

    const handleChange = (e) => {
        setWr((prevState) => ({
            ...prevState,
            ...e,
        }));
    }

    const handleRatingClick = (star) => {
        setWr((prevState) => ({
            ...prevState,
            rating: star,
        }));
    }

    const buttonText = () => {
        if (wr.w === 'c' && !wr.review_id) {
            return '작성';
        } else if (wr.w === 'c' && wr.review_id) {
            return '답글';
        } else {
            return '수정';
        }
    }

    return (
        <aside className={style.comment_write}>
            <div className={style.inner}>
                <textarea
                    className={style.scroll_custom}
                    placeholder="후기를 작성해주세요."
                    value={wr.content}
                    onChange={(e) => handleChange({ content: e.target.value })}
                />

                <div className={style.opt_area}>
                    {(props.w === 'c' && !wr.review_id) &&
                        <div className={style.star_sel}>
                            <span className={style.tit}>
                                평점 선택 <strong>({wr.rating}점)</strong>
                            </span>
                            <div className={style.star5}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        onClick={() => handleRatingClick(star)}
                                    >
                                        {wr.rating >= star ? (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.9655 0.600438L13.2213 5.17115C13.3781 5.48905 13.6814 5.70932 14.0323 5.76022L19.0765 6.49322C19.9601 6.62171 20.3126 7.70724 19.6735 8.3301L16.0235 11.8879C15.7699 12.1353 15.6539 12.492 15.714 12.8412L16.5755 17.8649C16.7265 18.7448 15.8028 19.4156 15.0127 19.0005L10.5012 16.6288C10.1875 16.464 9.81243 16.464 9.4987 16.6288L4.98723 19.0005C4.19708 19.416 3.27342 18.7448 3.42444 17.8649L4.28594 12.8412C4.34601 12.492 4.23003 12.1353 3.97638 11.8879L0.326404 8.3301C-0.312728 7.70682 0.0397958 6.6213 0.9234 6.49322L5.96762 5.76022C6.31848 5.70932 6.62177 5.48905 6.77864 5.17115L9.03437 0.600438C9.42903 -0.200146 10.5705 -0.200146 10.9655 0.600438Z" fill="#ffcf74" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.9655 0.600438L13.2213 5.17115C13.3781 5.48905 13.6814 5.70932 14.0323 5.76022L19.0765 6.49322C19.9601 6.62171 20.3126 7.70724 19.6735 8.3301L16.0235 11.8879C15.7699 12.1353 15.6539 12.492 15.714 12.8412L16.5755 17.8649C16.7265 18.7448 15.8028 19.4156 15.0127 19.0005L10.5012 16.6288C10.1875 16.464 9.81243 16.464 9.4987 16.6288L4.98723 19.0005C4.19708 19.416 3.27342 18.7448 3.42444 17.8649L4.28594 12.8412C4.34601 12.492 4.23003 12.1353 3.97638 11.8879L0.326404 8.3301C-0.312728 7.70682 0.0397958 6.6213 0.9234 6.49322L5.96762 5.76022C6.31848 5.70932 6.62177 5.48905 6.77864 5.17115L9.03437 0.600438C9.42903 -0.200146 10.5705 -0.200146 10.9655 0.600438Z" fill="#E8E9EB" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    }
                    
                    <div className={style.btn_wrap}>
                        {wr.w === "cu" && <button type="button" onClick={() => props.onClick()}>취소</button>}
                        <button
                            type="button"
                            className={[style.btn, style.btn_primary].join(" ")}
                            onClick={() => dispatch(reviewUpdate(wr))}
                        >
                            {buttonText()}
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default memo(ReviewForm);
