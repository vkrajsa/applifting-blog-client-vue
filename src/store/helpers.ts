import { mapGetters } from 'vuex';

export const isAuthenticated = {
  ...mapGetters('auth', ['isLoggedIn']),
};

export class Notification {
  constructor(response) {
    this.title = response.data.title || response.data.message;
    this.status = response.status;
    this.notificationType = this.status >= 400 ? 'error' : 'success';
  }
}
