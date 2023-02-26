import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MoviesEffects } from './movies.effects';

describe('MoviesEffects', () => {
  let actions$: Observable<any>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterModule, HttpClientModule],
      providers: [MoviesEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(MoviesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
