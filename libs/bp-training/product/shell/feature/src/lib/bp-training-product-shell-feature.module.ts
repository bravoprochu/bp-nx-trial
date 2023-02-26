import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bpTrainingProductShellFeatureRoutes } from './lib.routes';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { BpTrainingProductSharedDataAccessModule } from '@bp/bp-training/product/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bpTrainingProductShellFeatureRoutes),
    BpTrainingProductSharedDataAccessModule,
  ],
  declarations: [ShellLayoutComponent],
})
export class BpTrainingProductShellFeatureModule {}
