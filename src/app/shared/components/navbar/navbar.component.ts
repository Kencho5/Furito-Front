import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, LanguageSelectorComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
