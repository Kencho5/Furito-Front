import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import GE from '../../public/i18n/ge.json';
import EN from '../../public/i18n/en.json';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.translate.setTranslation('ge', GE);
    this.translate.setTranslation('en', EN);
    this.translate.addLangs(['ge', 'en']);

    this.translate.setDefaultLang('ge');
    this.translate.use(this.languageService.currentLang);
  }
}
