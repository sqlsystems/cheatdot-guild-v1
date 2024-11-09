import React, { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import style from 'css/desktop.module.css';

import DefaultPage from './Default';
import Menu from './Menu';

const ProductPage = dynamic(() => import('./Product'), { ssr: false });
const ProductDetailPage = dynamic(() => import('./ProductDetail'), { ssr: false });
const ProductInventoryPage = dynamic(() => import('./ProductInventory'), { ssr: false });
const SalesPage = dynamic(() => import('./Sales'), { ssr: false });

const StoreChannelSetting = ({ onClose }) => {
    const [menuType, setMenuType] = useState(0);

    const renderSettingPage = () => {
        switch (menuType) {
            case 0:
                return <DefaultPage />;
            case 1:
                return <ProductPage setMenuType={setMenuType} />;
            case 10:
                return <ProductDetailPage setMenuType={setMenuType} />;
            case 2:
                return <ProductInventoryPage />;
            case 3:
                return <SalesPage />;
        }
    }

    return (
        <div className={style.setting_pop}>
            <div className={style.wrapper}>
                <Menu
                    menuType={menuType}
                    setMenuType={setMenuType}
                />

                <div className={style.content}>
                    {renderSettingPage()}

                    <button type="button" className={style.btn_close} onClick={() => onClose({})}>
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

export default memo(StoreChannelSetting);
