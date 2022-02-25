import { userLogin } from '@/services/user';
import { MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/store';
import Storage from '@/utils/storage';
import { setAuthorizationHeader } from '@/utils/auth';
import { User, PostLogin } from '@/types/user';

export const userStorage = new Storage<User>('user');

export type State = User;

const state: State = {
  user: userStorage.get(),
  username: '',
};

const getters = {
  isLoggedIn(state: State) {
    return !!state.user;
  },
};

const mutations: MutationTree<State> = {
  setUser(state: State, userData) {
    userStorage.set(userData.user);
    setAuthorizationHeader();

    state.user = true;
    state.username = userData.username;
  },

  removeUser() {
    userStorage.remove();
    location.reload();
  },
};

const actions: ActionTree<State, RootState> = {
  async logIn({ commit, dispatch }, credentials: PostLogin) {
    try {
      const response = await userLogin(credentials);
      const userData = { user: response.data, username: credentials.username };

      commit('setUser', userData);
    } catch (error) {
      dispatch('notifications/add', error.response, { root: true });
      throw error;
    }
  },

  logOut({ commit }) {
    commit('removeUser');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
