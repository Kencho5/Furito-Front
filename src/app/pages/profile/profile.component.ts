import { Component } from '@angular/core';
import { ProfileSidebarComponent } from '@shared/components/profile/profile-sidebar/profile-sidebar.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile',
  imports: [SharedModule, ProfileSidebarComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {}
