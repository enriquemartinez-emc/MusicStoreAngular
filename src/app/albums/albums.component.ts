import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="display-4">Top Selling Albums</h1>
          <hr>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <img src="/assets/images/home-showcase.png" alt="" />
        </div>
      </div>
    </div>
  `,
})
export class AlbumsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
