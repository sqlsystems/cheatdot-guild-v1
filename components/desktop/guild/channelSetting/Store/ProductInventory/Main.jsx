import React, { memo } from 'react';
import { useStockList } from 'hooks/guild/useStockList';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import ProductCategoryList from './ProductCategoryList';
import StockList from './StockList';
import StockCount from './StockCount';

const Main = () => {
    const { data, addNewStock, applyData, params } = useStockList();

    return (
        <>
            <ConfigTitle title="재고 관리" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.top}>
                    <StockCount />

                    <div className={style.btn_wrap}>
                        <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => addNewStock(params.product_idx)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                 height="20" viewBox="0 0 20 20">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="사각형_28957" data-name="사각형 28957" width="20" height="20"
                                              fill="none"/>
                                    </clipPath>
                                </defs>
                                <g id="그룹_20398" data-name="그룹 20398" clipPath="url(#clip-path)">
                                    <path id="패스_47974" data-name="패스 47974"
                                          d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20m-.937-4.375V10.938H4.375V9.063H9.063V4.375h1.875V9.063h4.688v1.875H10.938v4.688Z"/>
                                </g>
                            </svg>
                            재고 등록
                        </button>
                    </div>
                </div>

                <div className={style.prd_inventory}>
                    {((data) && data.products) &&
                        <ProductCategoryList products={data.products} />
                    }

                    <StockList />

                    <div className={style.btn_wrap}>
                        <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => applyData()}>수정</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Main);
