import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers.set(
      'Authorization',
      localStorage.getItem('token') || '',
    ),
  });

  return next(modifiedReq);
};
