const state = {
  notifications: [],
};

let nextId = 1;

const mutations = {
  pushNotification(state, notification) {
    // maximum notifications on screen set to 3
    if (state.notifications.length > 3) {
      state.notifications.shift();
    }
    state.notifications.push({
      id: nextId++,
      ...notification,
    });
  },
  removeNotification(state, notificationToRemove) {
    state.notifications = state.notifications.filter((notification) => notification.id !== notificationToRemove.id);
  },
};

const actions = {
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
