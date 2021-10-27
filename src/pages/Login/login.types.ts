export interface LastestPostData {
  id: number;
  name: string;
  message: string;
  avatar_url: string;
}

export interface LastestPostResponse {
  data: LastestPostData[];
}

export interface UserReponse {
  id: string;
  name: string;
  login: string;
  github_id: number;
  avatar_url: string;
}

export interface AuthenticatedResponse {
  token: string;
  user: UserReponse;
}
