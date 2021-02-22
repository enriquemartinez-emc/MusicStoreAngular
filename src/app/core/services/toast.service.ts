import { Injectable } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private toast: NgbToast) {}

  showToast(message: string) {
    this.toast.delay = 4000;
    this.toast.
  }
}
