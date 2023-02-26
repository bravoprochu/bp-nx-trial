import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MovieListResponse } from '@bp/bp-training/movies/shared/util';

export const movieActionGroup = createActionGroup({
  source: '[Movie]',
  events: {
    'load movies by search phrase': emptyProps(),
    'load movies by search phrase failure': emptyProps(),
    'load movies by search phrase success': props<{
      response: MovieListResponse;
    }>(),

    'search phrase changed': props<{ searchPhrase: string }>(),
  },
});
