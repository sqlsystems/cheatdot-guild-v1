import React, { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import useSettingPage from 'hooks/guild/useSettingPage';
import style from 'css/desktop.module.css';

import Menu from './Menu';
import Default from './Default';

const MemberList = dynamic(() => import('./MemberList'), { ssr: false });
const Manager = dynamic(() => import('./Manager'), { ssr: false });
const ActivityStopManage = dynamic(() => import('./ActivityStopManage'), { ssr: false });
const ActivityStopLog = dynamic(() => import('./ActivityStopLog'), { ssr: false });
const ForceExitManage = dynamic(() => import('./ForceExitManage'), { ssr: false });
const ManageJoinRefusal = dynamic(() => import('./ManageJoinRefusal'), { ssr: false });
const CostInfo = dynamic(() => import('./CostInfo'), { ssr: false });
const CostList = dynamic(() => import('./CostList'), { ssr: false });
const ProductBuyHistory = dynamic(() => import('./ProductBuyHistory'), { ssr: false });
const AuditLog = dynamic(() => import('./AuditLog'), { ssr: false });

const GuildSetting = ({ onClose }) => {
    const [menuType, setMenuType] = useState(0);

    useSettingPage(e => onClose());

    const renderSettingPage = () => {
        switch (menuType) {
            case 0:
                return <Default />;
            case 1:
                return <MemberList />;
            case 2:
                return <Manager />;
            case 6:
                return <ActivityStopManage />;
            case 60:
                return <ActivityStopLog />;
            case 7:
                return <ForceExitManage />;
            case 70:
                return <ManageJoinRefusal />;
            case 3:
                return <CostInfo />;
            case 4:
                return <CostList />;
            case 8:
                return <ProductBuyHistory />;
            case 5:
                return <AuditLog />;
        }
    }

    return (
        <div className={style.setting_pop}>
            <div className={style.wrapper}>
                <Menu menuType={menuType} setMenuType={setMenuType} />

                <div className={style.content}>
                    {renderSettingPage()}

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
