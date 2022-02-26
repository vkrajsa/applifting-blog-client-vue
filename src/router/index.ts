import { createRouter, createWebHistory, RouteParams } from 'vue-router';
import { AppRouteNames } from '@/types/routes';
import store from '@/store/index';

const routes = [
  {
    name: 'index',
    path: '/',
    redirect: '/articles',
  },
  {
    name: 'articles',
    path: '/articles',
    component: () => import('@/views/Articles.vue'),
  },
  {
    name: 'article-detail',
    path: '/articles/:id',
    component: () => import('@/views/ArticleDetail.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/UserLogin.vue'),
  },
  {
    name: 'articles-admin',
    path: '/admin/articles',
    component: () => import('@/views/ArticlesAdmin.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'article-post',
    path: '/admin/add-article',
    component: () => import('@/views/PostArticle.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'article-edit',
    path: '/admin/articles/:id',
    component: () => import('@/views/EditArticle.vue'),
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

export function routerPush(name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  return router.push({
    name,
    params,
  });
}

export default router;
