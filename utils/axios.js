import axios from 'axios';

const createAxiosInstance = () => {
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        withCredentials: true,
    });
};

export default createAxiosInstance;
