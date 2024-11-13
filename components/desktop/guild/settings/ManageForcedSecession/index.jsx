import React, { memo, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { getForcedSecession, JoinRefusalClear } from '@redux/lib/guild/setting/manage_forced_secession';
import { alert } from '@redux/modules/alert';
import useCheckboxList from 'hooks/useCheckboxList';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';

const JoinRefusalAddModal = dynamic(() => import('./JoinRefusalAddModal'), { ssr: false });

const Index = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => state.settings.manage_forced_secession.list);
    const page = useSelector(state => state.settings.manage_forced_secession.params.page);

    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getForcedSecession());
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

    const openPopup = () => {
        if (Object.keys(checkedItems).length < 1) {
            return dispatch(alert({ content: '선택된 강제탈퇴 멤버가 없습니다.' }));
        }

        setPopup(true);
    }

    return (
        <>
            <ConfigTitle title="강제탈퇴 멤버 관리" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => dispatch(JoinRefusalClear(resetCheckedItems, checkedItems))}>가입불가 해제</button>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => openPopup()}>가입불가</button>
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

            {popup && <JoinRefusalAddModal setPopupData={() => setPopup(false)} resetCheckedItems={resetCheckedItems} />}
        </>
    );
}

export default memo(Index);
