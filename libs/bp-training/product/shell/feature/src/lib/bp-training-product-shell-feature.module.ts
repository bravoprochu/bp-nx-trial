import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bpTrainingProductShellFeatureRoutes } from './lib.routes';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bpTrainingProductShellFeatureRoutes),
  ],
  declarations: [ShellLayoutComponent],
})
export class BpTrainingProductShellFeatureModule {}
