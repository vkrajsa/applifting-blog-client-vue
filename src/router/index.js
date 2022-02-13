import { createRouter, createWebHistory } from 'vue-router';

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
    path: '/add-article',
    component: () => import('@/views/user/ArticleNew.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/admin/UserLogin.vue'),
  },
  {
    path: '/my-articles',
    component: () => import('@/views/admin/MyArticles.vue'),
  },
  {
    path: '/my-articles/:id',
    component: () => import('@/views/admin/ArticleEdit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
