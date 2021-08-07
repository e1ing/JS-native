import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=4580b5a3';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`);
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
