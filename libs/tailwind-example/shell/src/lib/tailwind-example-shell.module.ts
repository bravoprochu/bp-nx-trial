import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { tailwindExampleShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(tailwindExampleShellRoutes)],
})
export class TailwindExampleShellModule {}
