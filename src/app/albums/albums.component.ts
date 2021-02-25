import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Top Selling Albums</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card-deck">
            <div class="card border-light">
              <img
                src="https://coverartarchive.org/release-group/f2026101-945b-3d05-9ef4-aa718fc3feef/front.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">The Wall</p>
                <p class="card-text">US$16.99</p>
              </div>
            </div>
            <div class="card border-light">
              <img
                src="https://coverartarchive.org/release-group/f2026101-945b-3d05-9ef4-aa718fc3feef/front.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">The Wall</p>
                <p class="card-text">US$16.99</p>
              </div>
            </div>
            <div class="card  border-light">
              <img
                src="https://coverartarchive.org/release-group/f2026101-945b-3d05-9ef4-aa718fc3feef/front.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">For Those About To Rock</p>
                <p class="card-text">US$16.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AlbumsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
