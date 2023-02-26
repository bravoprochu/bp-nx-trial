import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { featureReducer } from '@bp/bp-training/movies/shared/data-access';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  noop,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

import { movieActionGroup } from '@bp/bp-training/movies/shared/data-access';

@Component({
  selector: 'bp-bp-training-movies-list-feature',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <p>bp-training-movies-list-feature works!</p>

    <input type="text" [formControl]="searchPhraseFC" />

    <div *ngFor="let movie of movieList$ | async">
      <p>
        <strong>{{ movie.Title }}</strong> {{ movie.Year }}
      </p>
      <img [src]="movie.Poster" />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BpTrainingMoviesListFeatureComponent implements OnInit, OnDestroy {
  private store = inject(Store);

  searchPhraseFC = new FormControl();
  movieList$ = this.store.select(featureReducer.selectMovies);

  private isDestroyed$ = new Subject<void>();

  ngOnDestroy(): void {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }

  ngOnInit(): void {
    this.initSearchPhraseObservable();
  }

  private initSearchPhraseObservable() {
    this.searchPhraseFC.valueChanges
      .pipe(
        takeUntil(this.isDestroyed$),
        debounceTime(750),
        distinctUntilChanged(),
        tap((searchPhrase) =>
          this.store.dispatch(
            movieActionGroup.searchPhraseChanged({ searchPhrase })
          )
        )
      )
      .subscribe(noop);
  }
}
