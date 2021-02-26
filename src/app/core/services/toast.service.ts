import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast>({
    header: '',
    body: '',
    className: '',
  });

  toast$ = this.toastSubject.asObservable();

  show(header: string, body: string, className: string) {
    this.toastSubject.next({ header, body, className });
  }
}
