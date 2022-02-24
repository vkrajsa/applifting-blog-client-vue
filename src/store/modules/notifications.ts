import { MutationTree, ActionTree } from 'vuex';
import { Notification } from '@/store/helpers';
import { RootState } from '@/store';

export type State = {
  notifications: Notification[];
};

const state: State = {
  notifications: [],
};

let nextId = 1;

const mutations: MutationTree<State> = {
  pushNotification(state, notification) {
    // maximum notifications on screen set to 3
    if (state.notifications.length > 2) {
      state.notifications.shift();
    }
    state.notifications.push({
      ...new Notification(notification, nextId++),
    });
  },
  removeNotification(state, notificationToRemove) {
    state.notifications = state.notifications.filter((notification) => notification.id !== notificationToRemove.id);
  },
};

const actions: ActionTree<State, RootState> = {
  add({ commit }, response) {
    commit('pushNotification', response);
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
