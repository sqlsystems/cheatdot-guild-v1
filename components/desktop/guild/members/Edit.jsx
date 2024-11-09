import React, { forwardRef, useState } from 'react';
import style from 'css/desktop.module.css';

const Edit = forwardRef((props, ref) => {
    const [mb, setMb] = useState(props.member);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setMb((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className={style.guild_profile_edit}>
            <div className={style.page_title}>
                <h1>프로필 설정</h1>
            </div>

            <div className={style.cont}>
                <div className={style.photo_edit}>
                    <div className={style.img_wrap}>
                        {(preview || mb.mb_img) ?
                            <img src={preview ? preview : mb.mb_img} width={100} height={100} alt="길드 프로필 이미지"/>
                            :
                            <img src="/img/no_profile.svg" alt="길드 프로필 이미지"/>
                        }

                        <div className={style.img_edit}>
                            <input type="file" id="mb_img" accept=".jpg,.jpeg,.png,.gif" onChange={handleImageChange} style={{ display: 'none' }}/>

                            <button type="button" onClick={() => props.setIsProfile(!props.isProfile)} ref={ref}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
                                    <g id="camera-fill" transform="translate(0 -2)">
                                        <path id="패스_48093" data-name="패스 48093"
                                              d="M10.5,8.5A2.5,2.5,0,1,1,8,6a2.5,2.5,0,0,1,2.5,2.5"/>
                                        <path id="패스_48094" data-name="패스 48094"
                                              d="M2,4A2,2,0,0,0,0,6v6a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H12.828a2,2,0,0,1-1.414-.586l-.828-.828A2,2,0,0,0,9.172,2H6.828a2,2,0,0,0-1.414.586l-.828.828A2,2,0,0,1,3.172,4Zm.5,2A.5.5,0,1,1,3,5.5a.5.5,0,0,1-.5.5m9,2.5A3.5,3.5,0,1,1,8,5a3.5,3.5,0,0,1,3.5,3.5"/>
                                    </g>
                                </svg>
                            </button>

                            {props.isProfile &&
                                <ul className={style.pop_layer}>
                                    <li>
                                        <button type="button" onClick={() => mb_img.click()}>사진등록</button>
                                    </li>
                                    <li>
                                        <button type="button" onClick={() => {
                                            mb_img.value = '';
                                            setPreview(null);
                                        }}>사진삭제
                                        </button>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                    <p>프로필은 길드별로 설정할 수 있습니다.</p>
                </div>

                <div className={style.form}>
                    <div className={style.item}>
                        <span className={style.tit}>별명</span>
                        <div className={style.input_box}>
                            <input type="text" value={mb.mb_nick} onChange={e => handleChange({ mb_nick: e.target.value })} maxLength={10} />
                            <button type="button" className={style.btn_trash} onClick={() => handleChange({ mb_nick: "" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path id="x-circle-fill" d="M16,8A8,8,0,1,1,8,0a8,8,0,0,1,8,8M5.354,4.646a.5.5,0,0,0-.708.708L7.293,8,4.646,10.646a.5.5,0,0,0,.708.708L8,8.707l2.646,2.647a.5.5,0,0,0,.708-.708L8.707,8l2.647-2.646a.5.5,0,1,0-.708-.708L8,7.293Z" fill="#595c61" />
                                </svg>
                            </button>
                        </div>

                        <div className={style.opt}>
                            <p className={style.msg}>사용할 수 있는 별명입니다.</p>
                            {/*메세지 붉은색으로 나올때는 .red 클래스 붙입니다.*/}
                            {/*<p className={[style.msg, style.red].join(' ')}>사용할 수 없는 별명입니다.</p>*/}
                            <span className={style.count}>
                                <em>{mb.mb_nick.length}</em>/10
                            </span>
                        </div>
                    </div>

                    <div className={style.item}>
                        <span className={style.tit}>소개</span>
                        <div className={style.txtarea_box}>
                            <textarea value={mb.intro} onChange={e => handleChange({intro: e.target.value})}/>
                        </div>
                    </div>
                </div>

                <div className={style.btn_wrap}>
                    <button type="button" className={[style.btn, style.btn_gray].join(' ')} onClick={() => window.close()}>취소</button>
                    <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => props.updateMyInfo(mb)}>확인</button>
                </div>
            </div>
        </div>
    );
});

export default Edit;
