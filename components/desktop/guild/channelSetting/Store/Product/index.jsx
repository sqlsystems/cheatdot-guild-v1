import React, { memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { setStoreChannelSetting } from '@redux/modules/guild';
import axios from 'axios';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';

const Paging = dynamic(() => import('components/public/DynamicPaging'), { ssr: false });

const Index = ({ setMenuType }) => {
    const dispatch = useDispatch();

    const channel = useSelector(state => state.guild.res_data.guild_info.channel);
    const channelId = useSelector(state => state.guild.channel_setting_data.id);

    const [params, setParams] = useState({
        page: 1
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        const requestData = async() => {
            const res = await axios.post('/v4/guild/channel_setting/store/api.php', {
                cmd: 'get_product_list',
                data: {
                    channel: channel,
                    channel_id: channelId,
                    params: params
                }
            });

            setData(res.data.message.result);
        }

        requestData();
    }, [params]);

    const EditProduct = async(idx) => {
        await dispatch(setStoreChannelSetting({ idx }));
        setMenuType(10);
    }

    const updateParams = (e) => {
        setParams((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    return (
        <>
            <ConfigTitle title="상품 관리">
                <p>상품을 등록하고 관리할 수 있습니다.</p>
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.top}>
                    <div className={style.btn_wrap}>
                        <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => setMenuType(10)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                 height="20" viewBox="0 0 20 20">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="사각형_28957" data-name="사각형 28957" width="20" height="20" fill="none"/>
                                    </clipPath>
                                </defs>
                                <g id="그룹_20398" data-name="그룹 20398" clipPath="url(#clip-path)">
                                    <path id="패스_47974" data-name="패스 47974"
                                          d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20m-.937-4.375V10.938H4.375V9.063H9.063V4.375h1.875V9.063h4.688v1.875H10.938v4.688Z"/>
                                </g>
                            </svg>
                            상품 등록
                        </button>
                    </div>
                </div>

                <div className={style.layout_box}>
                    <div className={[style.table, style.prd_list].join(' ')}>
                        <table>
                            <caption>상품 리스트</caption>
                            <colgroup>
                                <col width={120}/>
                                <col/>
                                <col width={80}/>
                                <col width={60}/>
                                <col width={60}/>
                                <col width={80}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th>이미지</th>
                                <th>상품명 / 상품설명</th>
                                <th>판매가</th>
                                <th>재고</th>
                                <th>조회</th>
                                <th>관리</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data?.list?.length > 0 ? data.list.map(c => {
                                return (
                                    <tr key={c.idx}>
                                        <td>
                                            <div className={style.img_wrap}>
                                                {c.thumbnail ?
                                                    <img src={c.thumbnail} alt="상품 이미지" />
                                                    :
                                                    <img src="/img/no_thumbnail.svg" width={120} alt="썸네일" />
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className={style.txt_wrap}>
                                                <button type="button" onClick={() => EditProduct(c.idx)}>{c.name}</button>
                                                <p>{c.content}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={style.red}>{c.price}</span>
                                        </td>
                                        <td>
                                            <span>{c.stock_count}</span>
                                        </td>
                                        <td>
                                            <span>{c.hit}</span>
                                        </td>
                                        <td>
                                            <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => EditProduct(c.idx)}>수정</button>
                                        </td>
                                    </tr>
                                );
                            })
                                :
                                <tr><td colSpan={7} style={{ padding: '100px 0' }}>상품이 없습니다.</td></tr>
                            }
                            </tbody>
                        </table>

                        {data.total_count > 20 &&
                            <Paging
                                page={params.page}
                                totalCount={data.total_count}
                                rows={20}
                                writePages={10}
                                onClick={e => updateParams({ page: e })}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Index);
