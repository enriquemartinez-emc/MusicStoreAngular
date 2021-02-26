import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../core';
import { AlbumService } from './album.service';

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
      <div class="row" *ngIf="topSellingAlbums$ | async as topSellingAlbums">
        <app-album-list [albums]="topSellingAlbums"></app-album-list>
      </div>
    </div>
  `,
})
export class AlbumsComponent implements OnInit {
  topSellingAlbums$!: Observable<Album[]>;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.getTopSellingAlbums();
  }

  getTopSellingAlbums() {
    this.topSellingAlbums$ = this.albumService.getTopSellingAlbums();
  }
}
