import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error';
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();
  toast$ = this.toastSubject.asObservable();
  private counter = 0;

  show(message: string, type: 'success' | 'error' = 'success') {
    this.counter++;
    this.toastSubject.next({ id: this.counter, message, type, visible: false });
  }
}