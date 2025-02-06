import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile-sidebar',
  imports: [SharedModule, RouterModule],
  templateUrl: './profile-sidebar.component.html',
})
export class ProfileSidebarComponent {
  constructor(public authService: AuthService) {}
}
