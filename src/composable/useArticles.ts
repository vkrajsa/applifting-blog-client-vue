import { computed, ref } from 'vue';
import store from '@/store/index';
import { ArticleList, ArticleDetail } from '../types/article';
import { getArticles, getArticleDetail } from '../services/article';
import { dispatchNotification } from '../utils/notification';

export async function useArticles() {
  const articles = ref<ArticleList[]>([]);

  async function fetchArticles() {
    try {
      const response = await getArticles();
      articles.value = response.data.items;
    } catch (error) {
      dispatchNotification(error.response.status);
    }
  }

  async function fetchArticleDetail(id: string) {
    try {
      const response = await getArticleDetail(id);
      return response.data;
    } catch (error) {
      dispatchNotification(error.response.status);
    }
  }

  return { articles, fetchArticles, fetchArticleDetail };
}

export const blogAuthor = computed(() => store.getters['user/getTenant']);
