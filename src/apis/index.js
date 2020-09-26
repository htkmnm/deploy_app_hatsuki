import axios from 'axios';

const API = axios.create({
    baseURL: 'https://qiita.com/api/v2'
});

export const fetchGetData = async () => {
    return await API.get('/items')
};
