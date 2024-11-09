import React from 'react';
import style from 'css/desktop.module.css';

import ReviewCount from './ReviewCount';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <div className={style.comment_wrap}>
            <ReviewCount />

            <ReviewList />

            <ReviewForm w="c" />
        </div>
    );
}

export default Review;
