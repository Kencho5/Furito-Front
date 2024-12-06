import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  constructor(private translate: TranslateService) {}

  public changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
