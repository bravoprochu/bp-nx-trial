import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bp-shell-layout',
  template: `<p>state shell</p>
    <router-outlet></router-outlet>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {}
