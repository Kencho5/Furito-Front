import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { SharedModule } from '../../shared.module';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { SpinnerComponent } from '../ui/spinner/spinner.component';

@Component({
  selector: 'app-navbar',
  imports: [
    SharedModule,
    LanguageSelectorComponent,
    UserMenuComponent,
    SpinnerComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
