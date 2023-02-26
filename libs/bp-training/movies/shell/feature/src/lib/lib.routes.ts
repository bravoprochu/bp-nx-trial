import { Route } from '@angular/router';
import { ShellLayoutComponent } from './components/shell-layout/shell-layout.component';

export const bpTrainingMoviesShellFeatureRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */

  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        loadComponent: () =>
          import('@bp/bp-training/movies/list/feature').then(
            (c) => c.BpTrainingMoviesListFeatureComponent
          ),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import('@bp/bp-training/movies/detail/feature').then(
            (c) => c.BpTrainingMoviesDetailFeatureComponent
          ),
      },
    ],
  },
];
