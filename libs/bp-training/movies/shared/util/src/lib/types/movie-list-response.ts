import { MovieList } from './movie-list';

export type MovieListResponse = {
  response: boolean;
  Search: MovieList[];
  totalResults: number;
};
