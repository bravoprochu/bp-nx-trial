import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMovies from './state/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/movies.effects';
import { HttpClientModule } from '@angular/common/http';
import { DataFactoryService } from './services/data-factory.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromMovies.featureReducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [DataFactoryService],
})
export class BpTrainingMoviesSharedDataAccessModule {}
