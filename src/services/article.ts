import api from './api';
import { Article, PostArticle } from '../types/article';

async function getArticles(isAdmin = false) {
  return await api.get(`/articles`, { withCredentials: isAdmin });
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
