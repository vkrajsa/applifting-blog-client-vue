import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp({
  created() {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      this.$store.commit('auth/setToken', JSON.parse(userToken));
    }
  },
  render: () => h(App),
});

app.use(store).use(router);

app.mount('#app');
