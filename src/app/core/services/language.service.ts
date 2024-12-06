import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private lang = signal(localStorage.getItem('lang') || 'ge');

  get currentLang() {
    return this.lang();
  }

  setLanguage(lang: string) {
    this.lang.set(lang);
    localStorage.setItem('lang', lang);
  }
}
