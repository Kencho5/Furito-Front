import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile-sidebar',
  imports: [SharedModule],
  templateUrl: './profile-sidebar.component.html',
})
export class ProfileSidebarComponent {}
