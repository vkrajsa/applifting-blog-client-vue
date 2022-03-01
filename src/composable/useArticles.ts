import { computed, ref } from 'vue';
import store from '@/store/index';
import { ArticleDetail, PostArticle, Article } from '../types/article';
import { getArticles, getArticleDetail, postArticle, deleteArticle } from '../services/article';
import { dispatchNotification } from '../utils/notification';

export function useArticles() {
  const articles = ref<Article[]>([]);

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

  async function destroyArticle(id: string) {
    try {
      return await deleteArticle(id);
    } catch (error) {
      console.log(error);
      dispatchNotification(error.response.status);
    }
  }

  const updateArticles = (id: string): void => {
    const filteredArticles = articles.value.filter((article) => {
      return article.articleId !== id;
    });

    articles.value = filteredArticles;
  };

  return { articles, fetchArticles, fetchArticleDetail, destroyArticle, updateArticles };
}

export async function postArticleForm(article: PostArticle) {
  try {
    const response = await postArticle(article);
    return response.data;
  } catch (error) {
    dispatchNotification(error.response.status);
  }
}

export const blogAuthor = computed(() => store.getters['user/getTenant']);
