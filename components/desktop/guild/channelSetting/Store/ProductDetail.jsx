import React, { memo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { formatAndSetNumber, formatNumberWithComma } from 'lib/common';
import { updateDefault } from '@redux/lib/guild/channelSetting/store';
import { setStoreChannelSetting } from '@redux/modules/guild';
import axios from 'axios';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';

const CKEditor = dynamic(() => import('plugin/editor/CKEditor'), { ssr: false });

const ProductDetail = ({ setMenuType }) => {
    const dispatch = useDispatch();

    const idx = useSelector(state => state.guild.store_channel_setting.idx);
    const channel = useSelector(state => state.guild.res_data.guild_info.channel);
    const channelId = useSelector(state => state.guild.channel_setting_data.id);

    const [data, setData] = useState({
        thumbnail: null,
        status: 1,
        name: '',
        content: '',
        price: 0,
        discount_rate: 0,
        is_star_point: false,
        is_review: false,
        is_stock_visible: false
    });

    useEffect(() => {
        const getProductData = async() => {
            const res = await axios.post('/v4/guild/channel_setting/store/api.php', {
                cmd: 'get_product_data',
                data: {
                    channel: channel,
                    channel_id: channelId,
                    params: {
                        idx: idx
                    }
                }
            });

            handleChange(res.data.message.result);
        }

        if (idx) {
            getProductData();
        }

        return () => {
            dispatch(setStoreChannelSetting({ idx: 0 }));
        }
    }, [idx]);

    const handleChange = (e) => {
        setData((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    const [preview, setPreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <ConfigTitle title="상품 수정" isConfirm onClick={() => dispatch(updateDefault({ idx, ...data, setMenuType }))} text={idx ? '수정' : '추가'}>
                <p>상품을 등록하고 관리할 수 있습니다.</p>
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.item}>
                    <div className={style.cont}>
                        <div className={style.img_upload_wrap}>
                            <div className={[style.img_wrap, style.guild_banner].join(' ')} onClick={() => document.getElementById('product_thumbnail').click()}>
                                {(preview || data.thumbnail) ?
                                    <img src={preview ? preview : data.thumbnail} alt="상품 썸네일" />
                                    :
                                    <span>길드 리스트 배너 이미지가 없습니다.</span>
                                }
                            </div>

                            <div className={style.img_upload}>
                                <div className={style.file_upload}>
                                    <input type="file" id="product_thumbnail" accept=".jpg,.jpeg,.png,.gif" onChange={handleImageChange} />
                                    <label htmlFor="product_thumbnail" className={[style.btn, style.btn_gray_line].join(' ')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.033" height="16"
                                             viewBox="0 0 14.033 16">
                                            <path id="패스_47785"
                                                  d="M7.549,1.732,7.016,1.2l-.532.532L2.475,5.742l-.532.532L3.007,7.336,3.54,6.8,6.265,4.079v8.11h1.5V4.079L10.493,6.8l.532.532,1.062-1.062-.532-.532ZM1.5,11.938v-.752H0V17.2H14.033V11.186h-1.5V15.7H1.5Z"
                                                  transform="translate(0 -1.2)"/>
                                        </svg>
                                        이미지 업로드
                                    </label>
                                </div>

                                <p>2MB 이내의 파일<br/>권장 사이즈 : 610x300px</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>상품명</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.flex}>
                            <div className={[style.select_box, style.w140].join(' ')}>
                                <select onChange={e => handleChange({ status: e.target.value })}>
                                    <option value={1}>판매중</option>
                                    <option value={0}>판매중지</option>
                                    <option value={2}>품절</option>
                                </select>
                            </div>

                            <div className={[style.input_box, style.wfull].join(' ')}>
                                <input type="text" value={data.name} onChange={e => handleChange({ name: e.target.value })} placeholder="상품명을 입력하세요." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>상품 설명</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.txtarea_box}>
                            <CKEditor
                                name="description"
                                onChange={e => handleChange({ content: e })}
                                value={data.content}
                            />
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.flex}>
                        <div>
                            <div className={style.tit_box}>
                                <span className={style.tit}>상품 가격</span>
                            </div>

                            <div className={style.cont}>
                                <div className={[style.input_box, style.cp].join(' ')}>
                                    <input
                                        type="text"
                                        value={data.price ? formatNumberWithComma(data.price) : ''}
                                        onChange={(e) => formatAndSetNumber(e, setData, 'price')}
                                        placeholder="판매 가격을 입력해주세요."
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.tit_box}>
                                <span className={style.tit}>할인율 (%)</span>
                            </div>

                            <div className={style.cont}>
                                <div className={style.input_box}>
                                    <input
                                        type="text"
                                        value={data.discount_rate ? formatNumberWithComma(data.discount_rate) : ''}
                                        onChange={(e) => formatAndSetNumber(e, setData, 'discount_rate')}
                                        placeholder="%"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.tit_box}>
                                <span className={style.tit}>할인가</span>
                            </div>
                            <div className={style.cont}>
                                <div className={style.flex}>
                                    <div className={[style.input_box, style.cp].join(' ')}>
                                        <input type="text" value={(data.price >= 100 && data.discount_rate > 0) && formatNumberWithComma(data.price - Math.round(data.price * (data.discount_rate / 100))) || ''} className={style.red} readOnly={true}/>
                                    </div>
                                    {(data.price >= 100 && data.discount_rate > 0) && <span style={{ alignSelf: 'flex-end', paddingBottom: '8px', color: 'var(--gray-60)' }}>{formatNumberWithComma(Math.round(data.price * (data.discount_rate / 100)))} CP 할인</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>상품 옵션</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.radio_wrap}>
                            <div className={style.radio_box1}>
                                <input type="checkbox" id="opt_01" onChange={e => handleChange({ is_star_point: e.target.checked })} checked={data.is_star_point} />
                                <label htmlFor="opt_01">상품 별점 허용</label>
                            </div>

                            <div className={style.radio_box1}>
                                <input type="checkbox" id="opt_02" onChange={e => handleChange({ is_review: e.target.checked })} checked={data.is_review} />
                                <label htmlFor="opt_02">상품 리뷰 허용</label>
                            </div>

                            <div className={style.radio_box1}>
                                <input type="checkbox" id="opt_03" onChange={e => handleChange({ is_stock_visible: e.target.checked })} checked={data.is_stock_visible} />
                                <label htmlFor="opt_03">상품 재고수량 노출</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ProductDetail);
