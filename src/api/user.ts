import api from './api';

export async function userLogin(credentials: User) {
  return api.post(`/login`, credentials);
}
