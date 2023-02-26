import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bpTrainingShellFeatureRoutes } from './lib.routes';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';

import { SharedUiModule } from '@bp/shared/ui';
import { BpTrainingDataAccessModule } from '@bp/bp-training/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(bpTrainingShellFeatureRoutes),
    SharedUiModule,
    BpTrainingDataAccessModule,
  ],
  declarations: [ShellLayoutComponent],
})
export class BpTrainingShellFeatureModule {}
