import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { LanguageService } from './core/services/language.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private translate: TranslocoService,
    private languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {
    this.translate.setActiveLang(this.languageService.currentLang);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
