import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

const exportImportComponents = [NotFoundComponent];

@NgModule({
  exports: [...exportImportComponents],
  imports: [CommonModule, RouterModule],
  declarations: [...exportImportComponents],
})
export class SharedUiModule {}
