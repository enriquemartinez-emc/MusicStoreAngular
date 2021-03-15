import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Album } from '../core';

@Component({
  selector: 'app-album-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-4" *ngFor="let album of albums">
        <div class="card h-100">
          <img src="{{ album.albumArtUrl }}" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{{ album.title }}</p>
          </div>
          <div class="card-footer text-muted">US$ {{ album.price }}</div>
        </div>
      </div>
    </div>
  `,
})
export class AlbumListComponent {
  @Input() albums: Album[] = [];

  constructor() {}
}
