import axios from 'axios';
import { AxiosAdapter } from 'axios/index';
import { setAuthorizationHeader } from '../utils/auth';

const apiInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    Accept: 'application/json',
    'X-API-KEY': process.env.VUE_APP_API_KEY,
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(
  // TODO: set types properly
  function (config: any) {
    const token = setAuthorizationHeader();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiInstance;
