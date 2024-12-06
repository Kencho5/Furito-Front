import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import GE from '../../public/i18n/ge.json';
import EN from '../../public/i18n/en.json';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setTranslation('ge', GE);
    this.translate.setTranslation('en', EN);
    this.translate.addLangs(['ge', 'en']);

    this.translate.setDefaultLang('ge');
    this.translate.use(localStorage.getItem('lang') || 'ge');
  }
}
