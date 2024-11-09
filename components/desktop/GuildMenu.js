import style from '@styles/desktop.module.css';

export default function GuildMenu(props) {
    return (
        <>
            <button type="button" className={style.btn_top}>
                <span>길드이름</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.003" height="8" viewBox="0 0 14.003 8">
                    <path id="XMLID_224_" d="M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0,.689.689,0,0,0,0-.947Z" transform="translate(14.002 83.004) rotate(180)" fill="#8b8f95"/>
                </svg>
            </button>
        </>
    );
}
