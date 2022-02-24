import { mapGetters } from 'vuex';
import { AxiosResponse } from 'axios';

export const isAuthenticated = {
  ...mapGetters('auth', ['isLoggedIn']),
};
export class Notification {
  title: string;
  status: number;
  notificationType: string;

  constructor(response: AxiosResponse, public id?: number) {
    this.title = response.data.title || response.data.message;
    this.status = response.status;
    this.notificationType = this.status >= 400 ? 'error' : 'success';
    this.id = id;
  }
}
