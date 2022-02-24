import axios from 'axios';
import { userLogin } from '@/services/user';
import { MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/store';

export type State = User;

const state: State = {
  username: null,
  token: null,
};

const getters = {
  isLoggedIn(state: State) {
    return !!state.token;
  },
};

const mutations: MutationTree<State> = {
  setToken(state: State, userToken) {
    // state.token = true;
    localStorage.setItem('userToken', JSON.stringify(userToken));
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken.access_token}`;
  },

  clearToken() {
    localStorage.removeItem('userToken');
    location.reload();
  },
};

const actions: ActionTree<State, RootState> = {
  async logIn({ commit, dispatch }, credentials) {
    try {
      const response = await userLogin(credentials);
      const userToken = response.data;

      commit('setToken', userToken);
    } catch (error) {
      dispatch('notifications/add', error.response, { root: true });

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
