import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthGuard } from '@core/guards/auth.guard';
import { provideTransloco } from '@jsverse/transloco';
import { requestInterceptor } from '@core/interceptors/request.interceptor';
import { responseInterceptor } from '@core/interceptors/response.interceptor';
import { TranslocoHttpLoader } from '@utils/transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([requestInterceptor, responseInterceptor]),
    ),
    AuthGuard,
    provideTransloco({
      config: {
        availableLangs: ['en', 'ge'],
        defaultLang: 'ge',
        reRenderOnLangChange: true,
        prodMode: true,
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
