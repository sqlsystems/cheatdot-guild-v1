import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import style from 'css/desktop.module.css';

import SearchForm from '@guild/components/SearchForm';

const NoResult = dynamic(() => import('components/public/NoResult'));

const List = () => {
    const data = useSelector(state => state.channels.store.list);
    const queryString = useSelector(state => state.query_string);
    const channelTitle = useSelector(state => state.guild.res_data.current_channel_data.name);

    const list = data.message.result.list;

    return (
        <>
            <div className={style.layout_box}>
                <header className={style.head}>
                    <h2>{channelTitle}</h2>

                    <SearchForm />
                </header>
            </div>

            <div className={style.board_gallery} style={{ marginTop : 20 }}>
                {list.length > 0 ?
                    <ul>
                        {list.map(c => {
                            return (
                                <li key={c.idx} className={style.product}>
                                    <Link href={`/${queryString.channel}/${queryString.channel_id}/${c.seo_title}`}>
                                        <div className={[style.img_wrap, c.stock_count < 1 ? style.soldout : null].join(' ')}>
                                            {c.thumbnail ?
                                                <img src={c.thumbnail} alt="썸네일" />
                                                :
                                                <img src="/img/no_thumbnail.svg" alt="썸네일" />
                                            }
                                        </div>
                                    </Link>

                                    <Link href={`/${queryString.channel}/${queryString.channel_id}/${c.seo_title}`}>
                                        <div className={style.txt_wrap}>
                                            <span className={style.category}>배틀그라운드</span>
                                            <span className={style.title}>{c.name}</span>
                                            <p className={style.sub}>{c.content}</p>
                                            <div className={style.pd_info1}>
                                                <div className={style.star_box}>
                                                    <span className={style.bg}>
                                                        <div className={style.star} />
                                                        <span className={style.bar} style={{ width: `${c.rating_percent}%` }} />
                                                    </span>
                                                    <span>{c.average_rating}</span>
                                                </div>

                                                {c.is_stock_visible &&
                                                    <span className={style.amount}>
                                                    남은수량
                                                    <strong>{c.stock_count}</strong>개
                                                </span>
                                                }
                                            </div>
                                        </div>
                                    </Link>

                                    <div className={style.pd_info2}>
                                        <div className={style.price}>
                                            {c.discount_rate > 0 && <span className={style.regular_price}>{c.price}</span>}
                                            <div>
                                                {c.discount_rate > 0 && <span className={style.percent}>{c.discount_rate}%</span>}
                                                <span className={style.sell_price}>
                                                    <em>{c.sales_price || c.price}</em>
                                                    <img src="/img/cp.png" width={24} height={24} alt="CP" />
                                                </span>
                                            </div>
                                        </div>
                                        <button type="button" className={[style.btn, style.btn_black].join(' ')} disabled={c.stock_count < 1}>{c.stock_count < 1 ? '품절' : '구매'}</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    :
                    <div className={style.layout_box}>
                        <NoResult title="등록된 상품이 없습니다." />
                    </div>
                }
            </div>

            {/*페이징*/}
        </>
    );
}

export default memo(List);
