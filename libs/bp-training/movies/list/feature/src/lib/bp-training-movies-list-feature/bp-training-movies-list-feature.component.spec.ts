import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { BpTrainingMoviesListFeatureComponent } from './bp-training-movies-list-feature.component';

describe('BpTrainingMoviesListFeatureComponent', () => {
  let component: BpTrainingMoviesListFeatureComponent;
  let fixture: ComponentFixture<BpTrainingMoviesListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpTrainingMoviesListFeatureComponent, StoreModule.forRoot({})],
    }).compileComponents();

    fixture = TestBed.createComponent(BpTrainingMoviesListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
