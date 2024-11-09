import React, { Fragment } from 'react';
import style from 'css/common.module.css';

const Paging = (props) => {
    const totalPage = Math.ceil(props.totalCount / props.rows);

    const startPage = Math.floor((props.page - 1) / props.writePages) * props.writePages + 1;
    let endPage = startPage + props.writePages - 1;

    if (endPage >= totalPage) {
        endPage = totalPage;
    }

    return (
        <div className={style.paging_wrap}>
            <ul>
                {totalPage > 1 && [...Array(endPage)].map((c, index) => {
                    let i = index + 1;

                    if (i >= startPage) {
                        return (
                            <Fragment key={i}>
                                {startPage > 1 && i === startPage && (
                                    <li>
                                        <button type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                                                <path id="XMLID_224_" d="M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0A.689.689,0,0,0,13.813,81.862Z" transform="translate(-75 14) rotate(-90)" fill="#8b8f95"/>
                                            </svg>
                                        </button>
                                    </li>
                                )}

                                {props.page !== i ?
                                    <li><button type="button" onClick={() => props.onClick(i)}>{i}</button></li>
                                    :
                                    <li><span className={style.current}>{i}</span></li>
                                }

                                {totalPage > endPage && i === endPage && (
                                    <li>
                                        <button type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                                                <path id="XMLID_224_" d="M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0A.689.689,0,0,0,13.813,81.862Z" transform="translate(83 0) rotate(90)" fill="#8b8f95"/>
                                            </svg>
                                        </button>
                                    </li>
                                )}
                            </Fragment>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default React.memo(Paging);
