export interface User {
  user: boolean | null;
  username: string | null;
}

export interface PostLogin {
  username: string;
  password: string;
}
