import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../core';

@Component({
  selector: 'app-album-list',
  template: ``,
})
export class AlbumListComponent implements OnInit {
  @Input() album: Album[] = [];

  constructor() {}

  ngOnInit() {}
}
