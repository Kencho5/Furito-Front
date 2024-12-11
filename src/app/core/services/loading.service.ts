import { Injectable, signal } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = signal(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.setLoading(true);
          break;
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.setLoading(false);
          break;
      }
    });
  }

  private setLoading(state: boolean) {
    this.loading.set(state);
  }
}
