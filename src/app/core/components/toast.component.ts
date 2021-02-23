import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast } from '../models';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <ngb-toast [header]="toast.header" [autohide]="true" [delay]="4000"
      >{{ toast.body }}
    </ngb-toast>
  `,
})
export class ToastComponent implements OnDestroy {
  private subs = new Subscription();
  toast: Toast = {} as Toast;

  constructor(private toastService: ToastService) {
    this.subs.add(
      this.toastService.toast$.subscribe((toast) => (this.toast = toast))
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
