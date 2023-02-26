import { Component } from '@angular/core';

@Component({
  selector: 'bp-root',
  template: `<h1>Welcome bp-training</h1>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bp-training';
}
