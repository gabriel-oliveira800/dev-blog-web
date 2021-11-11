export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
export interface User {
  id: number;
  role: Role;
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface Follows {
  user: User;
  created_at: Date;
}

export interface LastestPost {
  id: number;
  name: string;
  message: string;
  avatar_url: string;
}
