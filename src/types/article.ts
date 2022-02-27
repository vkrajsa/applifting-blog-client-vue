import { Comment } from './comment';

export interface Article {
  articleId: string;
  title: string;
  perex: string;
  imageId: null | string;
  createdAt: string;
  lastUpdatedAt: string[];
}

export interface ArticleList {
  items: Article[];
}

export interface ArticleDetail extends Article {
  content: string | null;
  comments: Comment;
}
