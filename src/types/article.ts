import { Comment } from './comment';

export interface Article {
  articleId: string;
  title: string;
  perex: string;
  imageId: null | string;
  createdAt: string;
  lastUpdatedAt: string[];
}

export interface ArticleDetail extends Article {
  content: string | null;
  comments: Comment;
}

export interface PostArticle {
  title: string;
  content: string;
  perex: string | null;
  imageId: string | null;
}
