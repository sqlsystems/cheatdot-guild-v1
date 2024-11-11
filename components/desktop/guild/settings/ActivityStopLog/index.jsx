import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getActivityStopLogList } from '@redux/lib/guild/setting/activity_stop_log';
import style from 'css/desktop.module.css';

import SearchForm from '@guild/components/SearchForm';
import List from './List';

const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getActivityStopLogList());
        }

        fetchData();
    }, []);

    return (
        <>
            <div className={style.head_tit}>
                <h2>활동정지 기록</h2>
            </div>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <SearchForm>
                            <option value="mb_id">아이디</option>
                            <option value="mb_nick">닉네임</option>
                        </SearchForm>
                    </div>

                    <List />
                </div>
            </div>
        </>
    );
}

export default memo(Index);
