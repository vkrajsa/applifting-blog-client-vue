import { mapGetters } from 'vuex';

export const isAuthenticated = {
  ...mapGetters('auth', ['isLoggedIn']),
};

export class Notification {
  constructor(response) {
    this.title = response.data.title || response.data.message;
    this.status = response.status;

    this.notificationType = () => {
      if (this.status >= 400) {
        return 'error';
      }
      return 'success';
    };
  }
}
