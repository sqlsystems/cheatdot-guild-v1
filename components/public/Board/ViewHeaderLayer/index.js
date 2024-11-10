import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { alert } from 'redux/modules/alert';
import Link from 'next/link';

const ViewHeaderLayer = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const style = props.style;
    const view = props.view;

    return (
        <div className={style.pop_layer}>
            <ul>
                {view.is_edit &&
                    <li>
                        <Link href={props.updateGallHref}>수정</Link>
                    </li>
                }
                {view.is_del &&
                    <li>
                        <button type="button" onClick={() => props.deleteGall()}>삭제</button>
                    </li>
                }
                <li>
                    <button type="button"
                            onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`)}>URL
                        복사
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => {
                        if (!props.mbId)
                            return dispatch(alert({ content: '로그인 후 가능합니다.' }));

                        window.open('/report', 'report', 'width=410,height=700,left=300,top=200,scrollbars=yes,menubar=no,toolbar=no,location=no');
                    }}>게시물 신고
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default React.memo(ViewHeaderLayer);
