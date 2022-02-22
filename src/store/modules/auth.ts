import axios from 'axios';
import { userLogin } from '@/api/user';
import router from '@/router/index';
import { Notification } from '@/store/helpers';

const state = () => ({
  token: null,
});

const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

const mutations = {
  setToken(state, userToken) {
    state.token = true;
    localStorage.setItem('userToken', JSON.stringify(userToken));
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken.access_token}`;
  },

  clearToken() {
    localStorage.removeItem('userToken');
    location.reload();
  },
};

const actions = {
  async logIn({ commit, dispatch }, credentials) {
    try {
      const response = await userLogin(credentials);
      const userToken = response.data;

      commit('setToken', userToken);
    } catch (error) {
      dispatch('notifications/add', new Notification(error.response), { root: true });
      throw error;
    }
  },

  logOut({ commit }) {
    commit('clearToken');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
