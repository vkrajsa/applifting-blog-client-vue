import { createStore } from 'vuex';
import user from './modules/user';
import notifications from './modules/notifications';
import { State as UserState } from '@/store/modules/user';
import { State as NotificationState } from '@/store/modules/notifications';

export type RootState = {
  user: UserState;
  notifications: NotificationState;
};

export default createStore({
  modules: {
    user,
    notifications,
  },
});
