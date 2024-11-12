import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/manage_whole_member';
import style from 'css/desktop.module.css';

const FilterBox = () => {
    const dispatch = useDispatch();

    const params = useSelector(state => state.settings.manage_whole_member.params);

    return (
        <div className={style.filter_box}>
            <div className={style.radio_wrap} style={{ gap: '0 20px' }}>
                <div className={style.radio_box2}>
                    <input type="radio" name="list_type" id="type_01" onChange={() => dispatch(setParams({ list_type: 0 }))} checked={params.list_type === 0} />
                    <label htmlFor="type_01">전체</label>
                </div>
                <div className={style.radio_box2}>
                    <input type="radio" name="list_type" id="type_02" onChange={() => dispatch(setParams({ list_type: 1 }))} checked={params.list_type === 1} />
                    <label htmlFor="type_02">유료멤버</label>
                </div>
                <div className={style.radio_box2}>
                    <input type="radio" name="list_type" id="type_03" onChange={() => dispatch(setParams({ list_type: 2 }))} checked={params.list_type === 2} />
                    <label htmlFor="type_03">승인대기</label>
                </div>
            </div>
        </div>
    );
}

export default memo(FilterBox);
