import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import { setAuthorizationHeader } from './utils/auth';
import { setTenant } from './utils/tenant';
import { userStorage } from './store/modules/user';
import markdownEditor from './markdown-config';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';
import FontAwesomeIcon from './utils/fa-icons';

const app = createApp({
  created() {
    // THIS GETS CALLED IN EVERY REFRESH - SAVE TO LOCALSTORAGE?
    setTenant();
  },
  render: () => h(App),
});

app.component('fa-icon', FontAwesomeIcon);

app.use(markdownEditor);

app.use(store).use(router);

app.mount('#app');
