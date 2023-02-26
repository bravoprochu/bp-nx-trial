import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bpTrainingShellFeatureRoutes } from './lib.routes';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';

import { SharedUiModule } from '@bp/shared/ui';
import { BpTrainingSharedDataAccessModule } from '@bp/bp-training/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(bpTrainingShellFeatureRoutes),
    SharedUiModule,
    BpTrainingSharedDataAccessModule,
  ],
  declarations: [ShellLayoutComponent],
})
export class BpTrainingShellFeatureModule {}
