import React, { memo } from 'react';
import style from 'css/desktop.module.css';

const StockListForm = ({ stockItem, index, updateStock, removeStock, products }) => {
    const handleProductChange = (e) => {
        updateStock(index, { product_idx: Number(e.target.value) });
    };

    const handleContentChange = (e) => {
        updateStock(index, { content: e.target.value });
    };

    const handleStatusChange = (e) => {
        updateStock(index, { status: Number(e.target.value) });
    };

    return (
        <tr>
            <td>
                <div className={style.select_box}>
                    <select value={stockItem.product_idx} onChange={handleProductChange}>
                        <option value={0}>상품선택</option>
                        {products.map((product) => (
                            <option key={product.idx} value={product.idx}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </div>
            </td>
            <td>
                <div className={style.input_box}>
                    <input
                        type="text"
                        value={stockItem.content}
                        onChange={handleContentChange}
                    />
                </div>
            </td>
            <td>
                <div className={style.select_box}>
                    <select value={stockItem.status} onChange={handleStatusChange}>
                        <option value={1}>사용</option>
                        <option value={0}>사용안함</option>
                        <option value={2}>판매됨</option>
                    </select>
                </div>
            </td>
            <td>
                <button type="button" className={style.btn_delete} onClick={removeStock}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20"
                         viewBox="0 0 17.5 20">
                        <path id="패스_48021" data-name="패스 48021"
                              d="M6.25,0H5.9L5.719.293,4.34,2.5H0V3.75H1.25V20h15V3.75H17.5V2.5H13.16L11.781.293,11.6,0H6.25Zm5.434,2.5H5.816L6.6,1.25h4.309l.781,1.25ZM2.5,18.75v-15H15v15ZM5.625,6.875V6.25H4.375v10h1.25V6.875Zm3.75,0V6.25H8.125v10h1.25V6.875Zm3.75,0V6.25h-1.25v10h1.25V6.875Z"/>
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default memo(StockListForm);
