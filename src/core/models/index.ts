export interface AuthenticatedResponse {
  user: User;
  token: string;
}

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
  message: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

export interface Feed {
  id: number;
  user: User;
  userId: string;
  message?: string;
  created_at: Date;
  images: string[];
  isFullAccess: boolean;
}
