import { Route } from '@angular/router';
import { LayoutComponent } from '@bp/state-training/feature';

export const stateTrainingShellFeatureRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LayoutComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
