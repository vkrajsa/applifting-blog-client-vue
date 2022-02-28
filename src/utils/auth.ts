import axios from 'axios';
import { userStorage } from '@/store/modules/user';

export function setAuthorizationHeader(): string {
  const token = userStorage.get();
  return `Bearer ${token.access_token}`;
}
