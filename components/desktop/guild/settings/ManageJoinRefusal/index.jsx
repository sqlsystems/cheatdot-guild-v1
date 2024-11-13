import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJoinRefusal } from '@redux/lib/guild/setting/manage_join_refusal';
import { JoinRefusalClear } from '@redux/lib/guild/setting/manage_forced_secession';
import useCheckboxList from 'hooks/useCheckboxList';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';

const ManageJoinRefusal = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => state.settings.manage_join_refusal.list);
    const page = useSelector(state => state.settings.manage_join_refusal.params.page);

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getJoinRefusal());
        }

        fetchData();
    }, [page]);

    const memoizedList = useMemo(() => (list), [list]);

    const {
        selectAll,
        checkedItems,
        handleSelectAllChange,
        handleItemChange,
        resetCheckedItems,
    } = useCheckboxList(memoizedList, ['idx', 'mb_id']);

    return (
        <>
            <ConfigTitle title="가입 불가 관리" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => dispatch(JoinRefusalClear(getJoinRefusal, resetCheckedItems, checkedItems))}>가입불가 해제</button>
                        </div>

                        <SearchForm />
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

export default memo(ManageJoinRefusal);
