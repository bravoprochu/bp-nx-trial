import { Component } from '@angular/core';

@Component({
  selector: 'bp-root',
  template: ` <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bp-training';
}