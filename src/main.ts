import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import posthog from 'posthog-js';

posthog.init('phc_n5MDfwnLzZtpIJvbXtkgTuOWWAU6qPeqB5jIfikfP79', {
  api_host: 'https://us.i.posthog.com',
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
