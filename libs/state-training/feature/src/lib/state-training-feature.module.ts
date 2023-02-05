import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  exports: [LayoutComponent],
  imports: [CommonModule],
  declarations: [LayoutComponent],
})
export class StateTrainingFeatureModule {}
