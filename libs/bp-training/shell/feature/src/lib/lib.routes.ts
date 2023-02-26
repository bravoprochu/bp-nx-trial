import { Route } from '@angular/router';

import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { NotFoundComponent } from '@bp/shared/ui';

export const bpTrainingShellFeatureRoutes: Route[] = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () =>
          import('@bp/bp-training/movies/shell/feature').then(
            (m) => m.BpTrainingMoviesShellFeatureModule
          ),
      },
      {
        path: 'state-training',
        loadChildren: () =>
          import('@bp/state-training/shell/feature').then(
            (m) => m.StateTrainingShellFeatureModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@bp/bp-training/product/shell/feature').then(
            (m) => m.BpTrainingProductShellFeatureModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
