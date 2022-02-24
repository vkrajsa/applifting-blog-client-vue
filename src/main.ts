import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import { setAuthorizationHeader } from './utils/auth';
import { userStorage } from './store/modules/user';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp({
  created() {
    if (userStorage.get()) {
      setAuthorizationHeader();
    }
  },
  render: () => h(App),
});

app.use(store).use(router);

app.mount('#app');
