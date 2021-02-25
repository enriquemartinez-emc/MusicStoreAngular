import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/assets/images/logo.png" alt="" />
        Music Store
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class HeaderBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
