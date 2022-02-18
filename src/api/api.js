import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    Accept: 'application/json',
    'X-API-KEY': process.env.VUE_APP_API_KEY,
    'Content-Type': 'application/json',
  },
});

export default api;
