import { Component } from '@angular/core';
import { LoadingService } from '@core/services/loading.service';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { ProfileSidebarComponent } from '@shared/components/profile/profile-sidebar/profile-sidebar.component';
import { LoadingDotsComponent } from '@shared/components/ui/loading-dots/loading-dots.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile-layout',
  imports: [
    SharedModule,
    NavbarComponent,
    ProfileSidebarComponent,
    LoadingDotsComponent,
  ],
  templateUrl: './profile-layout.component.html',
})
export class ProfileLayoutComponent {
  constructor(public loadingService: LoadingService) {}
}
