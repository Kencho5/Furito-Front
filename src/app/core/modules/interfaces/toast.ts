export type ToastType = 'success' | 'error';
export type ToastStatusType = 'entering' | 'exiting';

export interface Toast {
  id: number;
  title: string;
  subtext: string;
  duration: number;
  type: ToastType;
  status: ToastStatusType;
}
