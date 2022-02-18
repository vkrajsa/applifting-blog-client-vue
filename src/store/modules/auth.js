import { userLogin } from '@/api/user';

const state = () => ({
  user: null,
});

const actions = {
  async logIn({ commit }, credentials) {
    const response = await userLogin(credentials);
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
