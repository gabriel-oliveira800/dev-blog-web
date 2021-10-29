export interface User {
  id: string;
  name: string;
  login: string;
  github_id: number;
  avatar_url: string;
}

export interface LastestPost {
  id: number;
  name: string;
  message: string;
  avatar_url: string;
}
