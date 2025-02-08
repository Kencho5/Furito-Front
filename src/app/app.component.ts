import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import GE from '../../public/i18n/ge.json';
import EN from '../../public/i18n/en.json';
import { LanguageService } from './core/services/language.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {
    this.translate.setTranslation('ge', GE);
    this.translate.setTranslation('en', EN);
    this.translate.addLangs(['ge', 'en']);

    this.translate.setDefaultLang('ge');
    this.translate.use(this.languageService.currentLang);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
