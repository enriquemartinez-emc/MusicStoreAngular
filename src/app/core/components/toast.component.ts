import { Component } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <style>
      :host {
        position: fixed;
        top: 0;
        right: 0;
        margin: 0.5em;
        z-index: 1200;
      }
    </style>
    <div *ngIf="toast$ | async as toast">
      <ngb-toast
        [header]="toast.header"
        [class]="toast.className"
        [autohide]="true"
        [delay]="4000"
        >{{ toast.body }}
      </ngb-toast>
    </div>
  `,
})
export class ToastComponent {
  toast$ = this.toastService.toast$;

  constructor(private toastService: ToastService) {}
}
