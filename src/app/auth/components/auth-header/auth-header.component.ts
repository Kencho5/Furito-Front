import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-auth-header',
  imports: [LanguageSelectorComponent, SharedModule],
  templateUrl: './auth-header.component.html',
})
export class AuthHeaderComponent {}
