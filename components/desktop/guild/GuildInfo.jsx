import React, { memo } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { attendGuild } from '@redux/lib/guild';
import { encrypt } from 'lib/common';
import style from 'css/desktop.module.css';

const GuildInfo = () => {
    const dispatch = useDispatch();

    const guildInfo = useSelector(state => state.guild.res_data.guild_info);
    const member = useSelector(state => state.guild.res_data.member);

    return (
        <div className={[style.top_banner, style.layout_box].join(' ')} style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Jv2KOxrVHAmA0TkfzbIp404pPKx95V_rgw&s)' }}>
            <div className={style.profile}>
                <img src="https://cheatdot.com/data/member_image/go/godqhr123.gif?1721392504" alt="회원 프로필"/>
            </div>

            <div className={style.right}>
                <span className={style.tit}>{guildInfo.name}</span>
                <div className={style.info}>
                    <span>
                        길드장
                        <strong>{guildInfo.owner_nick}</strong>
                    </span>
                    <span>
                        길드원 <strong>{guildInfo.attend_count}</strong>
                    </span>
                    <span>
                        개설일 <strong>2024.08.26</strong>
                    </span>
                </div>
            </div>

            <div className={style.btn_wrap}>
                <button type="button" className={style.btn}>치트톡 보내기</button>
                {member.mb_id ?
                    <>
                        <button type="button" className={style.btn}>길드탈퇴</button>
                        <Link href={`/guild/${guildInfo.channel}/members/${encrypt(member.mb_id)}`} className={style.btn}>내정보</Link>
                    </>
                    :
                    <>
                        <button type="button" className={style.btn} onClick={() => dispatch(attendGuild())}>길드가입신청</button>
                    </>
                }
                {/*<button type="button" className={style.btn}>길드가입 승인대기중</button>*/}
            </div>
        </div>
    );
}

export default memo(GuildInfo);
