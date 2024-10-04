export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres?: [{ id: number; name: string }];
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
  tagline?: string;
  runtime?: number;
  spoken_languages: [{ id: number; name: string }];
  production_companies: [{ id: number; name: string }];
  status?: string;
}
