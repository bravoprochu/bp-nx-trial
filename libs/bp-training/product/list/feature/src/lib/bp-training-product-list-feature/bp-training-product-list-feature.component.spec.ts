import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpTrainingProductListFeatureComponent } from './bp-training-product-list-feature.component';

describe('BpTrainingProductListFeatureComponent', () => {
  let component: BpTrainingProductListFeatureComponent;
  let fixture: ComponentFixture<BpTrainingProductListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpTrainingProductListFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BpTrainingProductListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
