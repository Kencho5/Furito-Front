import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '@ui/dropdown/dropdown.component';
import { LanguageService } from '@core/services/language.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, DropdownComponent],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  constructor(
    public languageService: LanguageService,
    private translate: TranslocoService,
  ) {}

  @ViewChild('dropdown') dropdown!: DropdownComponent;

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

  toggle() {
    this.dropdown.toggle();

    this.translate
      .load(this.languageService.currentLang == 'ge' ? 'en' : 'ge')
      .subscribe();
  }
}
