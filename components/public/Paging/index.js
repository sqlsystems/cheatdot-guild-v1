import React, { Fragment } from 'react';
import Link from 'next/link';
import style from 'css/common.module.css';

const Paging = (props) => {
    const modifyUrl = (url) => {
        url = url.replace(/([&?])page=[0-9]*/g, '$1');
        url = url.endsWith('&') || url.endsWith('?') ? url : url + (url.includes('?') ? '&' : '?');

        url += 'page=';

        url = url.replace(/[^\w\-~+_.?#=!&;,/:%@$\|*\'()\[\]\\x80-\\xff]/ig, '');
        url = url.replace(/&&+/g, '&');
        url = url.replace(/&+$/, '');

        return url;
    }

    const url = modifyUrl(props.url);
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
                                        <Link href={`${url}${startPage - 1}`} aria-label="이전">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                                                <path id="XMLID_224_" d="M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0A.689.689,0,0,0,13.813,81.862Z" transform="translate(-75 14) rotate(-90)" fill="#8b8f95"/>
                                            </svg>
                                        </Link>
                                    </li>
                                )}

                                {props.page !== i ?
                                    <li><Link href={`${url}${i}`}>{i}</Link></li>
                                    :
                                    <li><span className={style.current}>{i}</span></li>
                                }

                                {totalPage > endPage && i === endPage && (
                                    <li>
                                        <Link href={`${url}${endPage + 1}`} aria-label="다음">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                                                <path id="XMLID_224_" d="M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0A.689.689,0,0,0,13.813,81.862Z" transform="translate(83 0) rotate(90)" fill="#8b8f95"/>
                                            </svg>
                                        </Link>
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
