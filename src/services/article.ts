import api from './api';
import { Article, PostArticle, Pagination } from '../types/article';

async function getArticles(params?: Pagination) {
  return await api.get(`/articles`, {
    params,
  });
}

async function getArticleDetail(id: string) {
  return await api.get(`/articles/${id}`);
}

async function postArticle(article: PostArticle) {
  return await api.post(`/articles`, article);
}

async function putArticle(id: string, article: PostArticle) {
  return await api.patch(`/articles/${id}`, article);
}

async function deleteArticle(id: string) {
  return await api.delete(`/articles/${id}`);
}

export { getArticles, postArticle, getArticleDetail, putArticle, deleteArticle };
