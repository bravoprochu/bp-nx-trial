import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bp-shell-layout',
  template: `
    <p>Products shell-layout works!</p>

    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {}
