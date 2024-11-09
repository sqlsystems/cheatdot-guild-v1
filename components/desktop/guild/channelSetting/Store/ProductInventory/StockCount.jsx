import React, { memo } from 'react';
import style from 'css/desktop.module.css';

const StockCount = () => {
    return (
        <>
            <span className={style.mark}>
                총 재고
                <strong>2</strong>
            </span>
            <span className={[style.mark, style.black].join(' ')}>
                판매
                <strong>24</strong>
            </span>
            <span className={style.mark}>
                사용중인 재고
                <strong>2</strong>
            </span>
            <span className={[style.mark, style.black].join(' ')}>
                미사용 재고
                <strong>24</strong>
            </span>
        </>
    );
}

export default memo(StockCount);
