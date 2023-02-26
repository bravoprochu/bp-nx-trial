import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routesConfig } from '@bp/bp-training/movies/shared/util';
import {
  RouterStateUrl,
  selectQueryParam,
  selectUrl,
} from '@bp/shared/ngrx/util';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  RouterAction,
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { DataFactoryService } from '../services/data-factory.service';
import { movieActionGroup } from './movies.actions';

@Injectable()
export class MoviesEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private router = inject(Router);

  private dataFactory = inject(DataFactoryService);
  private listUrl = `/${routesConfig.baseUrl}/${routesConfig.listUrl}`;

  navigateList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter((action: RouterAction<RouterNavigatedAction<RouterStateUrl>>) => {
        return action.payload.routerState?.url.includes(this.listUrl);
      }),
      map(() => movieActionGroup.loadMoviesBySearchPhrase())
    )
  );

  loadMoviesBySearchPhrase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(movieActionGroup.loadMoviesBySearchPhrase),
      withLatestFrom(this.store.select(selectQueryParam('searchPhrase'))),
      switchMap(([_, searchPhrase]) => {
        if (!searchPhrase)
          return of(movieActionGroup.loadMoviesBySearchPhraseFailure());

        return this.dataFactory.searchMovieByPhrase(searchPhrase).pipe(
          map((response) =>
            movieActionGroup.loadMoviesBySearchPhraseSuccess({ response })
          ),
          catchError(() =>
            of(movieActionGroup.loadMoviesBySearchPhraseFailure())
          )
        );
      })
    )
  );

  searchPhraseChanged$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(movieActionGroup.searchPhraseChanged),
        tap((action) => {
          const urlTree = this.router.createUrlTree([], {
            queryParams: { searchPhrase: action.searchPhrase, dupa: 'no way' },
          });

          this.router.navigateByUrl(urlTree);
        })
      ),
    { dispatch: false }
  );
}
