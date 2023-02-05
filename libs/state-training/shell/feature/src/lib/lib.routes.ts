import { Route } from '@angular/router';
import { LayoutComponent } from '@bp/state-training/feature';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';

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
