import { createFeatureSelector } from '@ngrx/store';
import * as fromMovies from './movies.reducer';

export const selectMoviesState = createFeatureSelector<fromMovies.State>(
  fromMovies.moviesFeatureKey
);
