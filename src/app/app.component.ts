import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import GE from '../../public/i18n/ge.json';
import EN from '../../public/i18n/en.json';
import { LanguageService } from './core/services/language.service';
import { LoadingService } from './core/services/loading.service';
import { LoadingDotsComponent } from './shared/components/ui/loading-dots/loading-dots.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingDotsComponent, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  loading: () => boolean;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private loadingService: LoadingService,
  ) {
    this.translate.setTranslation('ge', GE);
    this.translate.setTranslation('en', EN);
    this.translate.addLangs(['ge', 'en']);

    this.translate.setDefaultLang('ge');
    this.translate.use(this.languageService.currentLang);

    this.loading = this.loadingService.loading;
  }
}
