import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });
}
