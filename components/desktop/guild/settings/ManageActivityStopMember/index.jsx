import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/manage_activity_stop_member';
import { getActivityStopList, ReleaseStopMember } from '@redux/lib/guild/setting/manage_activity_stop_member';
import useCheckboxList from 'hooks/useCheckboxList';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';

const Index = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => state.settings.manage_activity_stop_member.list);
    const page = useSelector(state => state.settings.manage_activity_stop_member.params.page);

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getActivityStopList());
        }

        fetchData();
    }, [page]);

    const {
        selectAll,
        checkedItems,
        handleSelectAllChange,
        handleItemChange,
        resetCheckedItems
    } = useCheckboxList(list, 'mb_id');

    useEffect(() => {
        dispatch(setParams({ chk: checkedItems }));
    }, [checkedItems]);

    return (
        <>
            <ConfigTitle title="활동정지 멤버 관리" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => dispatch(ReleaseStopMember(resetCheckedItems))}>활동 정지 해제</button>
                        </div>

                        <SearchForm>
                            <option value="mb_id">아이디</option>
                            <option value="mb_nick">닉네임</option>
                        </SearchForm>
                    </div>

                    <List
                        selectAll={selectAll}
                        checkedItems={checkedItems}
                        handleSelectAllChange={handleSelectAllChange}
                        handleItemChange={handleItemChange}
                    />
                </div>
            </div>
        </>
    );
}

export default memo(Index);
