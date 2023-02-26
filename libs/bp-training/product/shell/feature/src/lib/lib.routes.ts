import { Route } from '@angular/router';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';

export const bpTrainingProductShellFeatureRoutes: Route[] = [
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
          import('@bp/bp-training/product/list/feature').then(
            (comp) => comp.BpTrainingProductListFeatureComponent
          ),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import('@bp/bp-training/product/detail/feature').then(
            (comp) => comp.BpTrainingProductDetailFeatureComponent
          ),
      },
    ],
  },
];
