import axios from 'axios';
import { userStorage } from '@/store/modules/user';

export function setAuthorizationHeader(): void {
  const token = userStorage.get();
  if (token !== undefined) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
