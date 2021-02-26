import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Album, ToastService } from '../core';

const api = environment.API;

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService
  ) {}

  getTopSellingAlbums(): Observable<Album[]> {
    const url = `${api}/albums?isTopSelling=true`;
    return this.httpClient.get<Album[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    this.toastService.show('Error', res.error, 'bg-danger text-light');
    return observableThrowError(res.error || 'Server error');
  }
}
