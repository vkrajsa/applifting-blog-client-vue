import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    redirect: '/articles',
  },
  {
    path: '/articles',
    component: () => import('@/views/user/ArticleList.vue'),
  },
  {
    path: '/articles/:id',
    component: () => import('@/views/user/ArticleDetail.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/admin/UserLogin.vue'),
  },
  {
    path: '/add-article',
    component: () => import('@/views/user/ArticleNew.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/my-articles',
    component: () => import('@/views/admin/MyArticles.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/my-articles/:id',
    component: () => import('@/views/admin/ArticleEdit.vue'),
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
