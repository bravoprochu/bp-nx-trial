import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bp-bp-training-movies-detail-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>bp-training-movies-detail-feature works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BpTrainingMoviesDetailFeatureComponent {}
