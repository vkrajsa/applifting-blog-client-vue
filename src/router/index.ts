import { createRouter, createWebHistory, RouteParams } from 'vue-router';
// import { isAuth } from '../utils/auth';
import store from '@/store/index';

export type AppRouteNames =
  | 'index'
  | 'articles'
  | 'article'
  | 'login'
  | 'articles-admin'
  | 'article-post'
  | 'article-edit';

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
    name: 'article',
    path: '/article/:id',
    component: () => import('@/views/Article.vue'),
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

router.beforeEach(async (to) => {
  const isAuth = store.getters['user/isLoggedIn'];

  if (to.meta.requiresAuth && !isAuth) {
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
