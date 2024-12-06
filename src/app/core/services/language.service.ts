import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}
  private lang = signal(localStorage.getItem('lang') || 'ge');

  get currentLang() {
    return this.lang();
  }

  setLanguage(lang: string) {
    this.lang.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
