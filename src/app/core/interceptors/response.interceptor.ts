import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import { inject } from '@angular/core';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      switch (error.status) {
        case 401:
          authService.logout();
      }

      return throwError(() => error);
    }),
  );
};
