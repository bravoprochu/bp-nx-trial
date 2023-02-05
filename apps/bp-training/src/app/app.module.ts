import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BpTrainingShellFeatureModule } from '@bp/bp-training/shell/feature';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BpTrainingShellFeatureModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
