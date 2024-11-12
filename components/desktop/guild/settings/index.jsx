import React, { useState, memo, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import useSettingPage from 'hooks/guild/useSettingPage';
import style from 'css/desktop.module.css';

import Menu from './Menu';

const Default = dynamic(() => import('./Default'), { ssr: false });
const MemberList = dynamic(() => import('./MemberList'), { ssr: false });
const StaffManage = dynamic(() => import('./StaffManage'), { ssr: false });
const ActivityStopManage = dynamic(() => import('./ActivityStopManage'), { ssr: false });
const ActivityStopLog = dynamic(() => import('./ActivityStopLog'), { ssr: false });
const ForceExitManage = dynamic(() => import('./ForceExitManage'), { ssr: false });
const ManageJoinRefusal = dynamic(() => import('./ManageJoinRefusal'), { ssr: false });
const CostInfo = dynamic(() => import('./CostInfo'), { ssr: false });
const CostList = dynamic(() => import('./CostList'), { ssr: false });
const ProductBuyHistory = dynamic(() => import('./ProductBuyHistory'), { ssr: false });
const AuditLog = dynamic(() => import('./AuditLog'), { ssr: false });

const GuildSetting = ({ onClose }) => {
    const member = useSelector(state => state.guild.res_data.member);
    const [menuType, setMenuType] = useState(member.is_auth ? Number(Object.keys(member.auth)[0]) : 100000);

    useSettingPage(e => onClose());

    const renderSettingPage = useMemo(() => {
        switch (menuType) {
            case 100000:
                return <Default />;
            case 200000:
                return <MemberList />;
            case 200100:
                return <StaffManage />;
            case 200200:
                return <ActivityStopManage />;
            case 200300:
                return <ActivityStopLog />;
            case 200400:
                return <ForceExitManage />;
            case 200500:
                return <ManageJoinRefusal />;
            case 300000:
                return <CostInfo />;
            case 300100:
                return <CostList />;
            case 300200:
                return <ProductBuyHistory />;
            case 400000:
                return <AuditLog />;
        }
    }, [menuType]);

    return (
        <div className={style.setting_pop}>
            <div className={style.wrapper}>
                <Menu menuType={menuType} setMenuType={setMenuType} />

                <div className={style.content}>
                    {renderSettingPage}

                    <button type="button" className={style.btn_close} onClick={() => onClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.121" height="12.121"
                             viewBox="0 0 12.121 12.121">
                            <g id="그룹_252" data-name="그룹 252" transform="translate(0.587 11.534) rotate(-90)"
                               opacity="0.5">
                                <line id="선_9" data-name="선 9" y1="10" x2="10" transform="translate(0.474 0.474)"
                                      fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"/>
                                <line id="선_10" data-name="선 10" x1="10" y1="10" transform="translate(0.474 0.474)"
                                      fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(GuildSetting);
