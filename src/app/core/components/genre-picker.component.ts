import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-picker',
  template: `
    <h5>Genres</h5>
    <hr />
    <nav class="nav flex-column">
      <a class="nav-link" href="#">Rock</a>
      <a class="nav-link" href="#">Jazz</a>
      <a class="nav-link" href="#">Pop</a>
      <a class="nav-link" href="#">Reggae</a>
    </nav>
  `,
})
export class GenrePickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
