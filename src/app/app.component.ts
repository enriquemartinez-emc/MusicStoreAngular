import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header-bar></app-header-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'MusicStoreAngular';
}
