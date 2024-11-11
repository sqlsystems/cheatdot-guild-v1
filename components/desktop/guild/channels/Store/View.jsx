import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyProduct } from '@redux/lib/guild/store';
import style from 'css/desktop.module.css';

import Review from './Review';

const View = () => {
    const dispatch = useDispatch();

    const view = useSelector((state) => state.channels.store.view.message.result);

    return (
        <>
            <div className={[style.store_view, style.layout_box].join(' ')}>
                <header className={style.head}>
                    <h2 className={style.tit}>{view.name}</h2>
                    <div className={style.item_info}>
                        <div className={style.star_box}>
                            <span className={style.bg}>
                                <div className={style.star} />
                                <span className={style.bar} style={{ width: `${view.rating_percent}%` }} />
                            </span>
                            <span>{view.average_rating}</span>
                        </div>

                        <div className={style.price}>
                            {view.discount_rate > 0 && <span className={style.percent}>{view.discount_rate}%</span>}
                            <div className={style.cp}>
                                {view.discount_rate > 0 && <span className={style.regular_price}>{view.price}</span>}
                                {view.price}
                                <img src="/img/cp.png" width={24} height={24} alt="CP" />
                            </div>
                        </div>

                        {view.stock_count &&
                            <span className={style.rest}>
                                남은수량 <strong>{view.stock_count}</strong>개
                            </span>
                        }

                        <button type="button" className={[style.btn, style.btn_black].join(' ')}>구매하기</button>
                    </div>
                </header>

                <div className={style.content}>
                    <div dangerouslySetInnerHTML={{ __html: view.content }} />

                    <div className={style.item_info}>
                        <div className={style.star_box}>
                            <span className={style.bg}>
                                <div className={style.star} />
                                <span className={style.bar} style={{ width: `${view.rating_percent}%` }} />
                            </span>
                            <span>{view.average_rating}</span>
                        </div>
                        
                        <div className={style.price}>
                            {view.discount_rate > 0 && <span className={style.percent}>{view.discount_rate}%</span>}
                            <div className={style.cp}>
                                {view.discount_rate > 0 && <span className={style.regular_price}>{view.price}</span>}
                                {view.price}
                                <img src="/img/cp.png" width={24} height={24} alt="CP" />
                            </div>
                        </div>
                        
                        {view.stock_count &&
                            <span className={style.rest}>
                                남은수량 <strong>{view.stock_count}</strong>개
                            </span>
                        }
                        
                        <button type="button" className={[style.btn, style.btn_black].join(' ')} onClick={() => dispatch(buyProduct(view))}>구매하기</button>
                    </div>
                </div>
                
                <Review />
            </div>
        </>
    );
}

export default View;
