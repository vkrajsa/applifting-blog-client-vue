import { userLogin } from '@/api/user';

const state = () => ({
  user: null,
});

const actions = {
  async logIn({ commit }, credentials) {
    const response = await userLogin({
      username: process.env.VUE_APP_USERNAME,
      password: process.env.VUE_APP_PASSWORD,
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
