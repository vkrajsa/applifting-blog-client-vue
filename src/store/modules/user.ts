import { userLogin } from '@/services/user';
import { MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/store';
import Storage from '@/utils/storage';
import { setAuthorizationHeader } from '@/utils/auth';
import { dispatchNotification } from '@/utils/notification';
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
  async logIn({ commit }, credentials: PostLogin) {
    try {
      const response = await userLogin(credentials);
      const userData = { user: response.data, username: credentials.username };

      commit('setUser', userData);
    } catch (error) {
      dispatchNotification(error.response.status);
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
