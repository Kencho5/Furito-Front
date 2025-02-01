import { Component } from '@angular/core';
import { DropdownComponent } from '@ui/dropdown/dropdown.component';
import { SharedModule } from '@shared/shared.module';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-user-menu',
  imports: [DropdownComponent, SharedModule],
  templateUrl: './user-menu.component.html',
})
export class UserMenuComponent {
  constructor(public authService: AuthService) {}
}
