import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header-bar></app-header-bar>
    <main class="container">
      <div class="row">
        <div class="col-12">
          <app-toast></app-toast>
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
})
export class AppComponent {
  title = 'MusicStoreAngular';
}
