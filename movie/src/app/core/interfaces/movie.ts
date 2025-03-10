export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface AuthResponse {
  accessToken: string;
  role?: string;
  username?: string;
}

export interface SignupData {
  username?: string;
  email?: string;
  password?: string;
  tmdb?: string;
  plan?: string;
}

export interface AuthDto {
  accessToken: string;
  role: UserRole;
}

export enum UserRole {
  USER = 'USER',
  SUPERUSER = 'SUPERUSER',
  ADMIN = 'ADMIN',
}

export class AppUserAuth {
  id?: string;
  username?: string;
  email?: string;
  role?: UserRole = UserRole.USER;
  jwtToken?: string;
}

