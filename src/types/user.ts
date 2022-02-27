export interface User {
  user: boolean | null;
  tenant: string | null;
}

export interface PostLogin {
  username: string;
  password: string;
}
