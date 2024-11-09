import React, { memo } from 'react';
import { useStockList } from 'hooks/guild/useStockList';
import style from 'css/desktop.module.css';

const ProductCategoryList = ({ products }) => {
    const { params, changeParams } = useStockList();

    return (
        <>
            <div className={style.tab_menu}>
                <ul>
                    <li>
                        <button type="button" className={params.product_idx === 0 ? style.on : null} onClick={() => changeParams({product_idx: 0})}>전체</button>
                    </li>
                    {products.map(c => {
                        return (
                            <li key={c.idx}>
                                <button type="button" className={params.product_idx === c.idx ? style.on : null} onClick={() => changeParams({product_idx: c.idx})}>{c.name}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={style.tab_menu}>
                <ul>
                    <li>
                        <button type="button" className={params.status === -1 ? style.on : null} onClick={() => changeParams({ status: -1 })}>전체</button>
                    </li>
                    <li>
                        <button type="button" className={params.status === 1 ? style.on : null} onClick={() => changeParams({ status: 1 })}>사용</button>
                    </li>
                    <li>
                        <button type="button" className={params.status === 0 ? style.on : null} onClick={() => changeParams({ status: 0 })}>사용안함</button>
                    </li>
                    <li>
                        <button type="button" className={params.status === 2 ? style.on : null} onClick={() => changeParams({ status: 2 })}>판매됨</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default memo(ProductCategoryList);
