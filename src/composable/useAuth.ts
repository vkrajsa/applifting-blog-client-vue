import store from '@/store/index';
import { computed } from 'vue';

export const isAuth = computed(() => store.getters['user/isLoggedIn']);
