import { mapGetters } from 'vuex';

export const isAuthenticated = {
  ...mapGetters('auth', ['isLoggedIn']),
};
