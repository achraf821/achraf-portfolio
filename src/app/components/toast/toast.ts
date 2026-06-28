import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../services/toast';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast implements OnInit {
  toasts: ToastMessage[] = [];

  constructor(private toastService: ToastService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.toastService.toast$.subscribe((toast) => {
      this.toasts.push(toast);
      this.cdr.detectChanges();

      setTimeout(() => {
        const t = this.toasts.find(x => x.id === toast.id);
        if (t) {
          t.visible = true;
          this.cdr.detectChanges();
        }
      }, 50);

      setTimeout(() => {
        const t = this.toasts.find(x => x.id === toast.id);
        if (t) {
          t.visible = false;
          this.cdr.detectChanges();
        }
      }, 2700);

      setTimeout(() => {
        this.toasts = this.toasts.filter(x => x.id !== toast.id);
        this.cdr.detectChanges();
      }, 3300);
    });
  }
}