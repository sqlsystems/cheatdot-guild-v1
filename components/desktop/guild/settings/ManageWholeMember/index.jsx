import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberList } from '@redux/lib/guild/setting/member';
import { setParams } from '@redux/modules/guild/settings/member';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import FilterBox from './FilterBox';
import Search from './Search';
import List from './List';

const MemberList = () => {
    const dispatch = useDispatch();

    const params = useSelector(state => state.settings.member.params);
    const attendWaitingCount = useSelector(state => state.guild.res_data.guild_info.attend_waiting_count);

    const innerRef = useRef(null);

    useEffect(() => {
        const res = async() => {
            await dispatch(getMemberList());

            if (innerRef.current) {
                innerRef.current.scrollTop = 0;
            }
        }

        res();
    }, [params]);

    return (
        <>
            <ConfigTitle title="멤버 목록">
                {attendWaitingCount > 0 && <p>멤버가입 승인 대기 <em>{attendWaitingCount}</em>건 있습니다.</p>}
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')} ref={innerRef}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <FilterBox />

                        <Search setParams={e => dispatch(setParams(e))} />
                    </div>

                    <List />
                </div>
            </div>
        </>
    );
}

export default MemberList;
