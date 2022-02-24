import api from './api';

export async function userLogin(credentials: Credentials) {
  return api.post(`/login`, credentials);
}
