import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpTrainingMoviesDetailFeatureComponent } from './bp-training-movies-detail-feature.component';

describe('BpTrainingMoviesDetailFeatureComponent', () => {
  let component: BpTrainingMoviesDetailFeatureComponent;
  let fixture: ComponentFixture<BpTrainingMoviesDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpTrainingMoviesDetailFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BpTrainingMoviesDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
