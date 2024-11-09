import React from 'react';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';

const CostList = () => {
    return (
        <>
            <ConfigTitle title="정산 내역" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.year_btn}>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                            <path id="패스_48055" data-name="패스 48055"
                                  d="M19.765,12l-7.75-7.756L4.234,12H0L12.015,0,24,12Z"
                                  transform="translate(0 24) rotate(-90)"/>
                        </svg>
                    </button>
                    <span className={style.year}>2024</span>
                    <button type="button" disabled={true}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                            <path id="패스_48055" data-name="패스 48055"
                                  d="M19.765,12l-7.75-7.756L4.234,12H0L12.015,0,24,12Z"
                                  transform="translate(12) rotate(90)"/>
                        </svg>
                    </button>
                </div>

                <div className={style.layout_box}>
                    <div className={style.table}>
                        <table>
                            <caption>멤버 리스트</caption>
                            <colgroup>
                                <col width={150}/>
                                <col/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th>일자</th>
                                <th>정산금</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={style.sum}>
                                <td>
                                    <span>합계</span>
                                </td>
                                <td className={style.right}>
                                    <span>28,100,000</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>2024.01.23</span>
                                </td>
                                <td className={style.right}>
                                    <span>28,000,000</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>2024.01.23</span>
                                </td>
                                <td className={style.right}>
                                    <span>100,000</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CostList;
