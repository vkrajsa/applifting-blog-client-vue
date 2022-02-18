import axios from 'axios';
import { userLogin } from '@/api/user';

const state = () => ({
  token: null,
});

const mutations = {
  setToken(state, userToken) {
    state.token = true;
    localStorage.setItem('userToken', JSON.stringify(userToken));
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken.access_token}`;
  },
};

const actions = {
  async logIn({ commit }, credentials) {
    const response = await userLogin(credentials);
    const userToken = response.data;
    commit('setToken', userToken);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
