import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from './movies.actions';

export const moviesFeatureKey = 'movies';

export interface State {
  isLoading?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(MoviesActions.loadMoviess, (state) => state)
);
