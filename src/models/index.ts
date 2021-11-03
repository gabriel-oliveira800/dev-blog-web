export interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface LastestPost {
  id: number;
  name: string;
  message: string;
  avatar_url: string;
}
