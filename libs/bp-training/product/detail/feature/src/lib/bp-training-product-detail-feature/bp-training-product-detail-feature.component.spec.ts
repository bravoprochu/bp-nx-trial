import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpTrainingProductDetailFeatureComponent } from './bp-training-product-detail-feature.component';

describe('BpTrainingProductDetailFeatureComponent', () => {
  let component: BpTrainingProductDetailFeatureComponent;
  let fixture: ComponentFixture<BpTrainingProductDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpTrainingProductDetailFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BpTrainingProductDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
