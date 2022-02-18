import api from './api';

export async function userLogin(credentials) {
  return api.post(`/login`, credentials);
}
