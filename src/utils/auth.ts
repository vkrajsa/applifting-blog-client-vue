import axios from 'axios';
import { userStorage } from '@/store/modules/user';

export function setAuthorizationHeader(): string | undefined {
  const token = userStorage.get();
  if (token) return `Bearer ${token.access_token}`;
}
