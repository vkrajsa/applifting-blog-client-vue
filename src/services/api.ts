import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    Accept: 'application/json',
    'X-API-KEY': process.env.VUE_APP_API_KEY,
    'Content-Type': 'application/json',
  },
});
