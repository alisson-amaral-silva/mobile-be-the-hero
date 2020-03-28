import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-test-be-the-hero.herokuapp.com'
});

export default api;