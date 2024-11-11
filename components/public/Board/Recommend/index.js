import React from 'react';
import { useDispatch } from 'react-redux';
import { gallRecommend } from '@redux/lib/board/board_view';
import { numberFormat } from 'lib/common';

const Goods = ({ style, isGood, isNoGood, goodCount, noGoodCount, selfGood }) => {
    const dispatch = useDispatch();

    return (
        <div className={style.recommend_btn}>
            {isGood &&
                <button type="button" className={[style.good, selfGood === 'good' ? style.on : null].join(' ')} onClick={() => dispatch(gallRecommend(1))}>
                    <span>👍</span>
                    추천
                    <em>{numberFormat(goodCount)}</em>
                </button>
            }
            {isNoGood &&
                <button type="button" className={[style.bad, selfGood === 'nogood' ? style.on : null].join(' ')} onClick={() => dispatch(gallRecommend(2))}>
                    <span>👎</span>
                    비추천
                    <em>{numberFormat(noGoodCount)}</em>
                </button>
            }
        </div>
    );
}

export default Goods;
