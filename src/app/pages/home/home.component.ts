import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  public get isLoggedIn() {
    return this.authService.loggedIn;
  }
}
