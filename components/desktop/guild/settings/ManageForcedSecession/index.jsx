import React, { memo, useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getForcedExitList, JoinRefusalClear } from '@redux/lib/guild/setting/forced_exit';
import { setParams } from '@redux/modules/guild/settings/manage_forced_secession';
import useCheckboxList from 'hooks/useCheckboxList';
import style from 'css/desktop.module.css';

import SearchForm from '@guild/components/SearchForm';
import List from './List';

const Index = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            const res = await dispatch(getForcedExitList());

            setData(res);
        }

        fetchData();
    }, []);

    const memoizedList = useMemo(() => (data.list ? data.list : []), [data.list]);

    const {
        selectAll,
        checkedItems,
        handleSelectAllChange,
        handleItemChange,
        resetCheckedItems,
    } = useCheckboxList(memoizedList, 'mb_id');

    useEffect(() => {
        dispatch(setParams({ chk: checkedItems }));
    }, [checkedItems]);

    return (
        <>
            <div className={style.head_tit}>
                <h2>강제탈퇴 멤버 관리</h2>
            </div>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => dispatch(JoinRefusalClear(resetCheckedItems))}>가입불가 해제</button>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')}>가입불가</button>
                        </div>

                        <SearchForm />
                    </div>

                    {data.list &&
                        <List
                            data={data}
                            selectAll={selectAll}
                            checkedItems={checkedItems}
                            handleSelectAllChange={handleSelectAllChange}
                            handleItemChange={handleItemChange}
                        />
                    }
                </div>
            </div>
        </>
    );
}

export default memo(Index);
