import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: true,
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => state)
);
