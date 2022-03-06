import { computed, ref, Ref } from 'vue';
import store from '@/store/index';
import { ArticleDetail, PostArticle, Article } from '../types/article';
import { getArticles, getArticleDetail, postArticle, deleteArticle, putArticle } from '../services/article';
import { dispatchNotification } from '../utils/notification';

export function useArticles() {
  const articles = ref<Article[]>([]);
  const articleLoader: Ref<boolean | null> = ref(null);

  async function fetchArticles() {
    try {
      const response = await getArticles();
      articles.value = sortArticles(response.data.items);
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
      dispatchNotification(error.response.status);
    }
  }

  const sortArticles = (articles: any): Article[] => {
    return articles.sort(function (a: Article, b: Article) {
      const date1 = new Date(a.createdAt).getTime();
      const date2 = new Date(b.createdAt).getTime();
      return date2 - date1;
    });
  };

  const updateArticles = (id: string): void => {
    const filteredArticles = articles.value.filter((article) => {
      return article.articleId !== id;
    });

    articles.value = filteredArticles;
  };

  async function postArticleForm(article: PostArticle, id?: string | any) {
    try {
      articleLoader.value = true;

      let response: any = {};
      let message = '';
      if (id) {
        response = await putArticle(id, article);
        message = 'Article was updated!';
      } else {
        response = await postArticle(article);
        message = 'Article was created!';
      }
      dispatchNotification(response.status, message);
    } catch (error) {
      dispatchNotification(error.response.status);
    } finally {
      articleLoader.value = false;
    }
  }

  return {
    articleLoader,
    articles,
    fetchArticles,
    fetchArticleDetail,
    destroyArticle,
    updateArticles,
    postArticleForm,
  };
}

export const blogAuthor = computed(() => store.getters['user/getTenant']);
