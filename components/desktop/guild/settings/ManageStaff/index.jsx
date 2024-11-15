import React, { memo, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { setParams, setAddAuthPopup } from '@redux/modules/guild/settings/manage_staff';
import { getStaffList, deleteAdminPermissions } from '@redux/lib/guild/setting/manage_staff';
import useCheckboxList from 'hooks/useCheckboxList';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';

const AddStaffPopup = dynamic(() => import('./AddStaffPopup'), { ssr: false });

const StaffManage = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => state.settings.manage_staff).list;
    const addAuthPopup = useSelector(state => state.settings.manage_staff.add_auth_popup);

    useEffect(() => {
        const res = async() => {
            await dispatch(getStaffList());
        }

        res();
    }, []);

    const memoizedList = useMemo(() => (list), [list]);

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
            <ConfigTitle title="관리자 설정">
                <p>관리자로 지정된 멤버는 관리자 설정, 길드 삭제를 제외한 모든 메뉴를 관리할 수 있습니다.</p>
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => dispatch(deleteAdminPermissions(resetCheckedItems))}>선택 삭제</button>
                        </div>

                        <SearchForm />
                    </div>

                    <List
                        selectAll={selectAll}
                        checkedItems={checkedItems}
                        handleSelectAllChange={handleSelectAllChange}
                        handleItemChange={handleItemChange}
                        addAuthPopup={e => dispatch(setAddAuthPopup({ is: true, data: e }))}
                    />
                </div>

                <div className={style.admin_add}>
                    <div className={style.head}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => dispatch(setAddAuthPopup({ is: true }))}>권한 추가</button>
                        </div>
                    </div>
                </div>

                {addAuthPopup.is &&
                    <AddStaffPopup data={addAuthPopup.data} onClose={() => dispatch(setAddAuthPopup({ is: false, data: null }))} />
                }
            </div>
        </>
    );
}

export default memo(StaffManage);
