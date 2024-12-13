export type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsProps extends Movie {
  belongs_to_collection: null | { [key: string]: any }; // Replace with actual type if known
  budget: number;
  genres: Genre[]; // Detailed genre objects
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

export interface FavoriteMoviesProps {
  id: number;
  poster_path: string;
  title: string;
}

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CastProps {
  cast: CastMember[];
}

interface Target {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  expired: boolean;
  identifier: string;
  name: string;
  providerId: string | null;
  providerType: string;
  userId: string;
}

interface UserProps {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  accessedAt: string;
  email: string;
  emailVerification: boolean;
  labels: string[];
  mfa: boolean;
  name: string;
  passwordUpdate: string;
  phone: string;
  phoneVerification: boolean;
  prefs: Record<string, unknown>; // Prefs can store any key-value pairs
  registration: string;
  status: boolean;
  targets: Target[];
}

interface SearchedMoviesProps {
  adult: boolean;
  backdrop_path: string | null; // Use null if the value can be absent
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null; // Use null if the value can be absent
  release_date: string; // Could use Date, but strings are typical for API responses
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
