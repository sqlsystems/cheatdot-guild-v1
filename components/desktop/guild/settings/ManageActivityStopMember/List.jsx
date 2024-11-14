import React, { memo } from "react";
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/manage_activity_stop_member';
import style from 'css/desktop.module.css';

const Paging = dynamic(() => import('components/public/DynamicPaging'), { ssr: false });

const List = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.settings.manage_activity_stop_member);

    const params = state.params;

    return (
        <div className={style.table}>
            <table>
                <caption>활동정지 멤버 리스트</caption>
                <colgroup>
                    <col width={50} />
                    <col width={160} />
                    <col />
                    <col width={110} />
                    <col width={110} />
                    <col width={160} />
                </colgroup>
                <thead>
                <tr>
                    <th>
                        <div className={style.chk_box}>
                            <input
                                type="checkbox"
                                checked={props.selectAll}
                                onChange={props.handleSelectAllChange}
                                id="select_all"
                            />
                            <label htmlFor="select_all" />
                        </div>
                    </th>
                    <th>닉네임</th>
                    <th>사유</th>
                    <th>처리일</th>
                    <th>종료일</th>
                    <th>처리자</th>
                </tr>
                </thead>
                <tbody>
                {state.list.length > 0 ? state.list.map(c => {
                    return (
                        <tr key={c.mb_id} className={props.checkedItems[c.mb_id] ? style.check : null}>
                            <td>
                                <div className={style.chk_box}>
                                    <input
                                        type="checkbox"
                                        checked={!!props.checkedItems[c.mb_id]}
                                        onChange={() => props.handleItemChange(c.mb_id)}
                                        id={c.mb_id}
                                    />
                                    <label htmlFor={c.mb_id} />
                                </div>
                            </td>
                            <td className={style.left}>
                                <span className={style.nick}>{c.mb_nick}</span>
                                <span>({c.mb_id})</span>
                            </td>
                            <td className={style.left}>
                                <span>{c.reason}</span>
                            </td>
                            <td>
                                <span>{c.start_date}</span>
                            </td>
                            <td>
                                <span>{c.end_date}</span>
                            </td>
                            <td className={style.left}>
                                <span className={style.nick}>{c.manager_nick}</span>
                                <span>({c.manager_id})</span>
                            </td>
                        </tr>
                    );
                })
                    :
                    <tr>
                        <td colSpan={6} style={{ padding: '100px 0' }}>활동 정지 멤버가 없습니다.</td>
                    </tr>
                }
                </tbody>
            </table>

            {state.total_count > 20 &&
                <Paging
                    page={params.page}
                    totalCount={state.total_count}
                    rows={20}
                    writePages={10}
                    onClick={e => dispatch(setParams({ page: e }))}
                />
            }
        </div>
    );
}

export default memo(List);
