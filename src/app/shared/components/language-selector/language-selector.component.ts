import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, TranslatePipe, DropdownComponent],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  constructor(private translate: TranslateService) {}

  opened: boolean = false;

  toggle() {
    this.opened = !this.opened;
  }

  public changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
