import { Injectable, signal } from '@angular/core';
import { Toast, ToastType } from '@core/modules/interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts = signal<Toast[]>([]);

  add(title: string, subtext: string, duration = 2500, type: ToastType) {
    const id = Date.now();
    const toast: Toast = {
      id,
      title,
      subtext,
      duration,
      type,
      status: 'entering',
    };

    this.toasts.update((toasts) => [toast, ...toasts]);

    setTimeout(() => this.remove(id), duration);
  }

  remove(id: number) {
    this.toasts.update((toasts) =>
      toasts.map((toast) =>
        toast.id === id ? { ...toast, status: 'exiting' } : toast,
      ),
    );

    setTimeout(() => {
      this.toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
    }, 300);
  }
}
