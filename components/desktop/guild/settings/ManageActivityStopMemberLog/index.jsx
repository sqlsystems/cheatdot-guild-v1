import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getActivityStopLogList } from '@redux/lib/guild/setting/manage_activity_stop_member_log';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';

const Index = () => {
    const dispatch = useDispatch();

    const page = useSelector(state => state.settings.manage_activity_stop_member_log.params.page);

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getActivityStopLogList());
        }

        fetchData();
    }, [page]);

    return (
        <>
            <ConfigTitle title="활동정지 기록" />

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
