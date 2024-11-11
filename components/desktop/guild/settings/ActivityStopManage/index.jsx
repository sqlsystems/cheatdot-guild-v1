import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/activity_stop';
import { getActivityStopList, ReleaseStopMember } from '@redux/lib/guild/setting/activity_stop';
import useCheckboxList from 'hooks/useCheckboxList';
import style from 'css/desktop.module.css';

import SearchForm from '@guild/components/SearchForm';
import List from './List';

const Index = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.settings.activity_stop.message.result);

    useEffect(() => {
        const fetchData = async() => {
            await dispatch(getActivityStopList());
        }

        fetchData();
    }, []);

    const {
        selectAll,
        checkedItems,
        handleSelectAllChange,
        handleItemChange,
        resetCheckedItems
    } = useCheckboxList(state ? state.list : [], 'mb_id');

    useEffect(() => {
        dispatch(setParams({ chk: checkedItems }));
    }, [checkedItems]);

    return (
        <>
            <div className={style.head_tit}>
                <h2>활동정지 멤버 관리</h2>
            </div>

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

                    {state &&
                        <List
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
