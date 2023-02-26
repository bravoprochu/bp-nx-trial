import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bp-bp-training-product-list-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>bp-training-product-list-feature works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BpTrainingProductListFeatureComponent {}
