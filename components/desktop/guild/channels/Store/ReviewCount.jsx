import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

const ReviewCount = () => {
    const reviewList = useSelector(state => state.guild_store.view.message.result.review_list);

    return (
        <header className={style.title}>
            <h3>후기<em>{reviewList.length}</em></h3>
        </header>
    );
}

export default memo(ReviewCount);
