import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments/environment';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes(environment.apiUrl)) {
    return next(req);
  }

  const modifiedReq = req.clone({
    headers: req.headers.set(
      'Authorization',
      localStorage.getItem('token') || '',
    ),
  });

  return next(modifiedReq);
};
