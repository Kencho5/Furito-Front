import { Injectable, signal } from '@angular/core';
import { Toast, ToastType } from '@core/modules/interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts = signal<Toast[]>([]);

  add(title: string, subtext: string, duration = 2500, type: ToastType) {
    const toast: Toast = {
      title,
      subtext,
      duration,
      type,
      status: 'entering',
    };

    this.toasts.update((toasts) => [...toasts, toast]);

    setTimeout(() => this.remove(0), duration);
  }

  remove(index: number) {
    this.toasts.update((toasts) =>
      toasts.map((toast, i) =>
        i === index ? { ...toast, status: 'exiting' } : toast,
      ),
    );

    setTimeout(() => {
      this.toasts.update((toasts) => toasts.filter((_, i) => i !== index));
    }, 300);
  }
}
