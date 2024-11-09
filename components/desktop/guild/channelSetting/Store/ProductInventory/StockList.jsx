import React, { memo } from 'react';
import { useStockList } from 'hooks/guild/useStockList';
import style from 'css/desktop.module.css';

import StockListForm from './StockListForm';

const StockList = () => {
    const { data, newStock, removeStock, updateStock } = useStockList();

    return (
        <table>
            <caption className={style.sound_only}>재고 리스트</caption>
            <colgroup>
                <col width={180} />
                <col />
                <col width={100} />
                <col width={50} />
            </colgroup>

            <tbody>
            {newStock.map((item, index) => (
                <StockListForm
                    key={index}
                    stockItem={item}
                    index={index}
                    updateStock={updateStock}
                    removeStock={() => removeStock(index)}
                    products={data.products}
                />
            ))}
            </tbody>
        </table>
    );
}

export default memo(StockList);
