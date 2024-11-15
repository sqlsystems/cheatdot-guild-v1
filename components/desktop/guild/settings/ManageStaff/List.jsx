import React, { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/manage_staff';
import useClickOutside from 'hooks/useClickOutside';
import style from 'css/desktop.module.css';

import ListItem from './ListItem';

const Paging = dynamic(() => import('components/public/DynamicPaging'), { ssr: false });

const List = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.settings.manage_staff);

    const [btnRef, setBtnRef] = useState(null);

    useClickOutside(btnRef, btnRef, () => setBtnRef(null));

    const params = state.params;

    return (
        <div className={style.table}>
            <table>
                <caption>관리자 리스트</caption>
                <colgroup>
                    <col width={60} />
                    <col />
                    <col width={100} />
                </colgroup>
                <thead>
                <tr>
                    <th>
                        <div className={style.chk_box}>
                            <input type="checkbox" checked={props.selectAll} onChange={props.handleSelectAllChange} id="select_all" />
                            <label htmlFor="select_all" />
                        </div>
                    </th>
                    <th>아이디</th>
                    <th>옵션</th>
                </tr>
                </thead>
                <tbody>
                {state.list.length > 0 ? state.list.map(c => {
                      return <ListItem
                          key={c.mb_id}
                          data={c}
                          _btnRef={btnRef}
                          setBtnRef={e => e === btnRef ? setBtnRef(null) : setBtnRef(e)}
                          addAuthPopup={e => props.addAuthPopup(e)}
                          selectAll={props.selectAll}
                          checkedItems={props.checkedItems}
                          handleSelectAllChange={props.handleSelectAllChange}
                          handleItemChange={props.handleItemChange}
                      />;
                  })
                    :
                    <tr>
                        <td colSpan={3}>
                            <p className={style.empty}>추가된 스탭이 없습니다.</p>
                        </td>
                    </tr>
                }
                </tbody>
            </table>

            {state.total_count > 20 &&
                <Paging page={params.page} totalCount={state.total_count} rows={20} writePages={10} onClick={e => dispatch(setParams({ page: e }))} />
            }
        </div>
    );
}

export default memo(List);
