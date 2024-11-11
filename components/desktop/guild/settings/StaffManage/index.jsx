import React, { memo } from 'react';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';
import AddAuth from './AddAuth';

const StaffManage = () => {
    return (
        <>
            <ConfigTitle title="관리자 설정">
                <p>관리자로 지정된 멤버는 관리자 설정, 길드 삭제를 제외한 모든 메뉴를 관리할 수 있습니다.</p>
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')}>선택 삭제</button>
                        </div>

                        <SearchForm />
                    </div>

                    <List />
                </div>

                <AddAuth />
            </div>
        </>
    );
}

export default memo(StaffManage);
