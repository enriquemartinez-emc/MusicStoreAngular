import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumListComponent } from './album-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
  },
];

@NgModule({
  declarations: [AlbumsComponent, AlbumListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AlbumsModule {}
