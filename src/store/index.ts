import { createStore } from 'vuex';
import auth from './modules/user';
import notifications from './modules/notifications';
import { State as AuthState } from '@/store/modules/user';
import { State as NotificationState } from '@/store/modules/user';

export type RootState = {
  auth: AuthState;
  notifications: NotificationState;
};

export default createStore({
  modules: {
    auth,
    notifications,
  },
});
