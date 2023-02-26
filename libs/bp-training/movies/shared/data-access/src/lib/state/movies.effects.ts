import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
}
