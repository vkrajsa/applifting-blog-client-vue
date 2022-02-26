import { MutationTree, ActionTree } from 'vuex';
import { CustomNotification } from '@/utils/notification';
import { RootState } from '@/store';

export type State = {
  notifications: CustomNotification[];
};

const state: State = {
  notifications: [],
};

const mutations: MutationTree<State> = {
  pushNotification(state, notification) {
    // maximum notifications on screen set to 3
    if (state.notifications.length > 2) {
      state.notifications.shift();
    }
    state.notifications.push(notification);
  },
  removeNotification(state, notificationToRemove) {
    state.notifications = state.notifications.filter((notification) => notification.id !== notificationToRemove.id);
  },
};

const actions: ActionTree<State, RootState> = {
  add({ commit }, notification) {
    commit('pushNotification', notification);
  },
  remove({ commit }, notification) {
    commit('removeNotification', notification);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
