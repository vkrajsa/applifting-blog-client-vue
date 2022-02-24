import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp({
  render: () => h(App),
});

app.use(store).use(router);

app.mount('#app');
