export interface Comment {
  commentId: string;
  author: string;
  content: string;
  createdAt: string;
  score: number;
}

export type CommentsList = Comment[];

export interface CommentForm {
  author: string;
  content: string;
}

export interface PostComment extends CommentForm {
  articleId: string;
}
