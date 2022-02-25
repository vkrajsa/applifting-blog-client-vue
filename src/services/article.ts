import api from './api';
import { Article } from '../types/article';

async function fetchArticles(isAdmin = false) {
  return await api.get(`/articles`, { withCredentials: isAdmin });
}

async function getArticleDetail(id: string) {
  return await api.get(`/articles/${id}`);
}

async function postArticle(article: Article) {
  return await api.post(`/articles`, article);
}

async function updateArticle(id: string, article: Article) {
  return await api.put(`/articles/${id}`, article);
}

async function deleteArticle(id: string) {
  return await api.delete(`/articles/${id}`);
}

export { fetchArticles, postArticle, getArticleDetail, updateArticle, deleteArticle };
