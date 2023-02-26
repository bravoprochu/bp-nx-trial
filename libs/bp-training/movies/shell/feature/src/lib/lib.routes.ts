import { Route } from '@angular/router';
import { ShellLayoutComponent } from './components/shell-layout/shell-layout.component';
import { routesConfig } from '@bp/bp-training/movies/shared/util';

export const bpTrainingMoviesShellFeatureRoutes: Route[] = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: routesConfig.listUrl,
      },
      {
        path: routesConfig.listUrl,
        loadComponent: () =>
          import('@bp/bp-training/movies/list/feature').then(
            (c) => c.BpTrainingMoviesListFeatureComponent
          ),
      },
      {
        path: routesConfig.detailUrl,
        loadComponent: () =>
          import('@bp/bp-training/movies/detail/feature').then(
            (c) => c.BpTrainingMoviesDetailFeatureComponent
          ),
      },
    ],
  },
];
