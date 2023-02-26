import { MovieList } from '@bp/bp-training/movies/shared/util';
import { createFeature, createReducer, on } from '@ngrx/store';
import { movieActionGroup } from './movies.actions';

export const moviesFeatureKey = 'movies';

export interface State {
  isLoading: boolean;
  movies: MovieList[];
}

export const initialState: State = {
  isLoading: false,
  movies: [],
};

const reducer = createReducer(
  initialState,
  on(
    movieActionGroup.loadMoviesBySearchPhrase,
    (state) => ({ ...state, isLoading: true, movies: [] } as State)
  ),
  on(
    movieActionGroup.loadMoviesBySearchPhraseSuccess,
    (state, action) =>
      ({ ...state, isLoading: true, movies: action.response.Search } as State)
  )
);

export const featureReducer = createFeature({
  name: moviesFeatureKey,
  reducer,
});
