import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/manage_join_refusal';
import style from 'css/desktop.module.css';

const Paging = dynamic(() => import('components/public/DynamicPaging'), { ssr: false });

const List = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.settings.manage_join_refusal);

    const params = state.params;

    return (
        <div className={style.table}>
            <table>
                <caption>가입 불가 관리</caption>
                <colgroup>
                    <col width={50} />
                    <col width={140} />
                    <col />
                    <col width={110} />
                    <col width={160} />
                    <col width={100} />
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
                    <th>아이디</th>
                    <th>사유</th>
                    <th>처리일</th>
                    <th>처리자</th>
                    <th>가입불가 여부</th>
                </tr>
                </thead>
                <tbody>
                {state.list.length > 0 ? state.list.map(c => {
                    return (
                        <tr key={c.idx}>
                            <td>
                                <div className={style.chk_box}>
                                    <input
                                        type="checkbox"
                                        checked={!!props.checkedItems[`${c.idx}-${c.mb_id}`]}
                                        onChange={() => props.handleItemChange(`${c.idx}-${c.mb_id}`)}
                                        id={`${c.idx}-${c.mb_id}`}
                                    />
                                    <label htmlFor={`${c.idx}-${c.mb_id}`} />
                                </div>
                            </td>
                            <td className={style.left}>
                                <span>{c.mask_mb_id}</span>
                            </td>
                            <td className={style.left}>
                                <span>{c.reason}</span>
                            </td>
                            <td>
                                <span>{c.date}</span>
                            </td>
                            <td className={style.left}>
                                <span className={style.nick}>{c.manager_nick}</span>
                                <span>({c.manager_id})</span>
                            </td>
                            <td>
                                <span className={!c.is_re_join ? style.red : null}>{!c.is_re_join ? '가입불가' : '-'}</span>
                            </td>
                        </tr>
                    );
                })
                    :
                    <tr>
                        <td colSpan={6} style={{ padding: '100px 0' }}>가입 불가 멤버가 없습니다.</td>
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