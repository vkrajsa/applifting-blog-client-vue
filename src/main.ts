import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import { setAuthorizationHeader } from './utils/auth';
import { setTenant } from './utils/tenant';
import { userStorage } from './store/modules/user';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp({
  created() {
    if (userStorage.get()) {
      setAuthorizationHeader();
    }
    // THIS GETS CALLED IN EVERY REFRESH - SAVE TO LOCALSTORAGE?
    setTenant();
  },
  render: () => h(App),
});

app.use(store).use(router);

app.mount('#app');
