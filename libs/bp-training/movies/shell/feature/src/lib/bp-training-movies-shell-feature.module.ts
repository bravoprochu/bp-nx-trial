import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bpTrainingMoviesShellFeatureRoutes } from './lib.routes';
import { ShellLayoutComponent } from './components/shell-layout/shell-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bpTrainingMoviesShellFeatureRoutes),
  ],
  declarations: [ShellLayoutComponent],
  exports: [ShellLayoutComponent],
})
export class BpTrainingMoviesShellFeatureModule {}
