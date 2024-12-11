import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
import { provideTranslateService } from '@ngx-translate/core';
import { requestInterceptor } from './core/interceptors/request.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([requestInterceptor])),
    AuthGuard,
    provideTranslateService({}),
  ],
};
