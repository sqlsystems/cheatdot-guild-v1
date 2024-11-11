import React, { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';
import useClickOutside from 'hooks/useClickOutside';

const ReviewListItem = dynamic(() => import('./ReviewListItem'));

const ReviewList = () => {
    const reviewList = useSelector(state => state.channels.store.view.message.result.review_list);

    const [commentItemEtc, setCommentEtcData] = useState({});
    const [reviewIds, setReviewIds] = useState({
        reply: 0,
        edit: 0
    });

    useClickOutside(commentItemEtc.ref, commentItemEtc.ref, () => setCommentEtcData({}));

    return (
        <section className={style.comment_list}>
            {reviewList.map(c => {
                return <ReviewListItem
                    key={c.idx}
                    { ...c }
                    commentItemEtc={commentItemEtc}
                    setCommentEtcData={setCommentEtcData}
                    reviewIds={reviewIds}
                    setReviewIds={setReviewIds}
                />;
            })}
        </section>
    );
}

export default memo(ReviewList);
