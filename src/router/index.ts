import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    redirect: '/articles',
  },
  {
    path: '/articles',
    component: () => import('@/views/ArticleList.vue'),
  },
  {
    path: '/articles/:id',
    component: () => import('@/views/ArticleDetail.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/UserLogin.vue'),
  },
  {
    path: '/add-article',
    component: () => import('@/views/ArticleNew.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/my-articles',
    component: () => import('@/views/MyArticles.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/my-articles/:id',
    component: () => import('@/views/ArticleEdit.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.getters['user/isLoggedIn']) {
    return {
      path: '/login',
    };
  }
});

export default router;
