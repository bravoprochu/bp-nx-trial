import { RouterStateUrl } from '@bp/shared/ngrx/util';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createReducer, MetaReducer } from '@ngrx/store';

type FirstState = {
  isReady: boolean;
};

const firstReducerInitialState = {
  isReady: true,
} as FirstState;

export const firstReducer = createReducer<FirstState>(firstReducerInitialState);

export interface State {
  app: FirstState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  app: firstReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
