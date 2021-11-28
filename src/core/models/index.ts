export interface AuthenticatedResponse {
  user: User;
  token: string;
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
export interface User {
  id: string;
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
  message: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
  created_at: Date;
}
export interface Feed {
  id: string;
  user: User;
  Like: Like[];
  userId: string;
  message?: string;
  created_at: Date;
  images: string[];
  isFullAccess: boolean;
}

export interface FeedPaginate {
  page: number;
  limit: number;
}

export interface FeedResponse {
  total: number;
  feeds: Feed[];
}
