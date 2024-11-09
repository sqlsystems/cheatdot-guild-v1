import Link from 'next/link';
import { createAxiosInstance } from '@utils/axios';
import style from 'css/desktop.module.css';

export default function Home({ pageProps }) {
    return (
        <div className={style.guild_container}>
            <div className={style.wrapper}>
                <div className={[style.search_wrap, style.white].join(' ')}>
                    <div className={style.select_box}>
                        <select>
                            <option value="wr_subject">제목</option>
                            <option value="wr_content">내용</option>
                            <option value="wr_subject||wr_content">제목+내용</option>
                            <option value="mb_id,1">회원아이디</option>
                            <option value="mb_id,0">회원아이디(코)</option>
                            <option value="wr_name,1">글쓴이</option>
                            <option value="wr_name,0">글쓴이(코)</option>
                        </select>
                    </div>

                    <div className={style.search_box}>
                        <input type="text" placeholder="검색어를 입력해주세요."/>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.002" height="15.984"
                                 viewBox="0 0 16.002 15.984">
                                <g id="search-svgrepo-com_1_" data-name="search-svgrepo-com (1)"
                                   transform="translate(0.002 -0.066)">
                                    <path id="패스_2" data-name="패스 2"
                                          d="M6.553,13.166a6.526,6.526,0,0,0,3.637-1.107l3.764,3.769a.783.783,0,0,0,1.092,0l.732-.733a.785.785,0,0,0,0-1.093L12,10.247a6.55,6.55,0,1,0-5.448,2.919Zm0-10.545A3.986,3.986,0,1,1,2.57,6.608,3.986,3.986,0,0,1,6.553,2.621Z"
                                          fill="#a6a8ad"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={style.guild_list}>
                    <ul>
                        {pageProps.list.map(c => {
                            return (
                                <li key={c.channel}>
                                    <Link href={`/${c.channel}`} target="_blank">
                                        <div className={style.img_wrap}>
                                            {/* 배너 이미지 비율과 안맞아서 추가로 등록해야하지 않을까 싶습니다 */}
                                            <img
                                                src="https://cdn.gametoc.co.kr/news/photo/202309/75833_234553_4219.jpg"
                                                alt="배너 이미지"/>
                                            <div className={style.owner_profile}>
                                                <img src="/img/no_profile.svg" width={80} height={80}
                                                     alt="길드 주인 프로필 이미지"/>
                                            </div>
                                        </div>
                                        <div className={style.txt_wrap}>
                                            <span className={style.tit}>{c.name}</span>
                                            <div className={style.info}>
                                    <span>
                                        길드장
                                        <strong>{c.mb_nick}</strong>
                                    </span>
                                                <span>
                                        길드원
                                        <strong>{c.attend_member_count}</strong>
                                    </span>
                                                <span>
                                        개설일
                                        <strong>{c.create_date}</strong>
                                    </span>
                                            </div>

                                            {c.hash_tag &&
                                                <div className={style.tag_wrap}>
                                                    {c.hash_tag.map(c => {
                                                        return <span key={c}>{c}</span>;
                                                    })}
                                                </div>
                                            }
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/* 페이징 넣을거면 여기에 넣어주세요. 시안에는 없어서 안넣음. 그리고 검색이 있어야 좋지 않을까 싶습니다. */}
                </div>
            </div>
        </div>
    );
}

Home.getInitialProps = async (ctx) => {
    const axios = createAxiosInstance(ctx.req);

    const res = await axios.post('/v4/guild/utils/api.php', {
        cmd: 'get_guild_list'
    });

    return {
        ...res.data.message.result
    };
}
