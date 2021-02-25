import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-picker',
  template: `
    <h1>Genres</h1>
    <hr />
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Rock
        <span class="badge badge-primary badge-pill">14</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Reggae
        <span class="badge badge-primary badge-pill">2</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Jazz
        <span class="badge badge-primary badge-pill">1</span>
      </li>
    </ul>
  `,
})
export class GenrePickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
