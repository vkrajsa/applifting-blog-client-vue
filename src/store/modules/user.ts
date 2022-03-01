import { userLogin } from '@/services/user';
import { MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/store';
import Storage from '@/utils/storage';
import { setAuthorizationHeader } from '@/utils/auth';
import { dispatchNotification } from '@/utils/notification';
import { User, PostLogin } from '@/types/user';

export const userStorage = new Storage<User>('user');

export type State = User;

const state = {
  user: !!userStorage.get(),
  tenant: null,
};

const getters = {
  isLoggedIn(state: State) {
    return state.user;
  },

  getTenant(state: State) {
    return state.tenant;
  },
};

const mutations: MutationTree<State> = {
  setTenant(state: State, tenant: string) {
    state.tenant = tenant;
  },

  setUser(state: State, userData) {
    userStorage.set(userData);
    setAuthorizationHeader();

    state.user = true;
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
      const userData = response.data;

      commit('setUser', userData);
    } catch (error) {
      dispatchNotification(error.response.status);
      throw error;
    }
  },

  dispatchTenant({ commit }, tenant: string) {
    commit('setTenant', tenant);
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
