export interface Comment {
  commentId: string;
  author: string;
  content: string;
  createdAt: string;
  score: number;
}

export type CommentsList = Comment[];
