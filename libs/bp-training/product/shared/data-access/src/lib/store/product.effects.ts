import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
}
