import { ref } from 'vue';
import { ArticleList } from '../types/article';
import { getArticles } from '../services/article';
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

  return { fetchArticles, articles };
}
