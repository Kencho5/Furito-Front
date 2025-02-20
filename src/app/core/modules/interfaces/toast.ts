export type ToastType = 'success' | 'error';

export interface Toast {
  title: string;
  subtext: string;
  duration: number;
  type: ToastType;
  status: 'entering' | 'exiting';
}
