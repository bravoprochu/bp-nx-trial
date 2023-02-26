import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '@bp/shared/ngrx/util';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
  ],
})
export class BpTrainingSharedDataAccessModule {}
