import { Route } from '@angular/router';

import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { NotFoundComponent } from '@bp/shared/ui';

export const bpTrainingShellFeatureRoutes: Route[] = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'state-training',
        loadChildren: () =>
          import('@bp/state-training/shell/feature').then(
            (m) => m.StateTrainingShellFeatureModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
