import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMemberLevel, setMemberAttendStatus } from '@redux/lib/guild/setting/member';
import useClickOutside from 'hooks/useClickOutside';

import ListItem from './ListItem';

const ListTable = ({ setPopupData }) => {
    const dispatch = useDispatch();
    const members = useSelector(state => state.settings.member.list);

    const [btnRef, setBtnRef] = useState(null);

    useClickOutside(btnRef, btnRef, () => setBtnRef(null));

    return (
        <table>
            <caption>멤버 리스트</caption>
            <colgroup>
                <col width={80}/>
                <col/>
                <col width={100}/>
                <col width={100}/>
                <col width={120}/>
                <col width={120}/>
                <col width={70}/>
            </colgroup>
            <thead>
            <tr>
                <th>번호</th>
                <th>닉네임</th>
                <th>가입비</th>
                <th>게시물 / 댓글</th>
                <th>가입일</th>
                <th>레벨</th>
                <th>관리</th>
            </tr>
            </thead>
            <tbody>
            {members?.length > 0 ? members.map(c => {
                return <ListItem
                    key={c.mb_id}
                    item={c}
                    _btnRef={btnRef}
                    setBtnRef={e => e === btnRef ? setBtnRef(null) : setBtnRef(e)}
                    setPopupData={setPopupData}
                    changeMemberLevel={e => dispatch(changeMemberLevel(e))}
                    setMemberAttendStatus={e => dispatch(setMemberAttendStatus(e))}
                />;
            })
                :
                <tr>
                    <td colSpan={7} style={{ padding: '50px 0' }}>멤버가 없습니다.</td>
                </tr>
            }
            </tbody>
        </table>
    );
}

export default memo(ListTable);
