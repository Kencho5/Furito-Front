import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../ui/dropdown/dropdown.component';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, TranslatePipe, DropdownComponent],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  constructor(public languageService: LanguageService) {}

  opened: boolean = false;
  LANGUAGES = [
    { code: 'ge', label: 'ქართული', shortLabel: 'ქარ' },
    { code: 'en', label: 'English', shortLabel: 'Eng' },
  ];

  get shortLabel() {
    return this.LANGUAGES.find(
      (lang) => lang.code === this.languageService.currentLang,
    )?.shortLabel;
  }

  public changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
}
