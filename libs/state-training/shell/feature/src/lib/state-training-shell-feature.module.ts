import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { stateTrainingShellFeatureRoutes } from './lib.routes';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { StateTrainingFeatureModule } from '@bp/state-training/feature';

@NgModule({
  imports: [
    CommonModule,
    StateTrainingFeatureModule,
    RouterModule.forChild(stateTrainingShellFeatureRoutes),
    RouterModule,
  ],
  declarations: [ShellLayoutComponent],
})
export class StateTrainingShellFeatureModule {}
