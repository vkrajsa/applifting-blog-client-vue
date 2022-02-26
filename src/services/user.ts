import api from './api';
import { PostLogin } from '@/types/user';

export async function userLogin(credentials: PostLogin) {
  return api.post(`/login`, credentials);
}
