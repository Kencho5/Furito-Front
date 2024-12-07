import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-navbar',
  imports: [SharedModule, LanguageSelectorComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
