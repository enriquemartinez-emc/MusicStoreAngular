import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header-bar></app-header-bar>
    <main class="container">
      <div class="row">
        <div class="col-2">
          <app-genre-picker></app-genre-picker>
        </div>
        <div class="col-10">
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
