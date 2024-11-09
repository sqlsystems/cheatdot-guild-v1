import axios from 'axios';

export const createAxiosInstance = (req = null) => {
    let headers = {};

    // 서버 사이드에서 실행될 때
    if (req) {
        headers = { ...req.headers };

        // PHPSESSID 쿠키가 있는 경우에만 헤더에 추가
        if (req.cookies && req.cookies.PHPSESSID) {
            headers.cookie = `PHPSESSID=${req.cookies.PHPSESSID}`;
        } else {
            delete headers.cookie;
        }
    }

    // Axios 인스턴스 생성
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: headers,
        withCredentials: true
    });
};
