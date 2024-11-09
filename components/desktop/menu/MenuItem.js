'use client';

import { Fragment } from 'react';
import style from '@styles/desktop.module.css';

export default function MenuItem(props) {
    const c = props.c;

    return (
        <Fragment>
            <div className={style.btn_top}>
                <button type="button" className={[style.btn_toggle, isMenu ? style.on : null].join(' ')} onClick={() => setMenu(!isMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                        <path id="다각형_2" data-name="다각형 2" d="M4,0,8,5H0Z" transform="translate(8 5) rotate(180)"/>
                    </svg>
                    <span>{c.category_name}</span>
                </button>

                {props.isAdmin &&
                    <button type="button" className={style.btn_add} onClick={() => dispatch(setCreateChannelModal({ category_id: c.category_id }))}>
                        <svg id="그룹_1050" data-name="그룹 1050" xmlns="http://www.w3.org/2000/svg" width="20"
                             height="20" viewBox="0 0 20 20">
                            <rect id="사각형_8810" data-name="사각형 8810" width="20" height="20" fill="rgba(68,68,68,0)"/>
                            <path id="plus" d="M9,4a.625.625,0,0,1,.625.625v3.75h3.75a.625.625,0,1,1,0,1.25H9.625v3.75a.625.625,0,1,1-1.25,0V9.625H4.625a.625.625,0,0,1,0-1.25h3.75V4.625A.625.625,0,0,1,9,4Z" transform="translate(1 1)" opacity="0.996" />
                        </svg>
                    </button>
                }
            </div>

            {isMenu &&
                <ul>
                    {c.submenu.map(s => {
                        return <RenderSubMenuList key={s.id} s={s} isAdmin={props.isAdmin} />;
                    })}
                </ul>
            }
        </Fragment>
    );
}
