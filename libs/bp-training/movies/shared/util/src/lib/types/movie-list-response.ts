import { MovieList } from './movie-list';

export type MovieListResponse = {
  response: boolean;
  search: MovieList[];
  totalResults: number;
};
