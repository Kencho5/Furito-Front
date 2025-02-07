import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile-sidebar',
  imports: [SharedModule, RouterModule],
  templateUrl: './profile-sidebar.component.html',
})
export class ProfileSidebarComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  activeTab: string = '';

  ngOnInit() {
    this.activeTab = this.router.url;

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.activeTab = this.router.url;
      }
    });
  }

  setActive(route: string) {
    this.activeTab = route;
  }
}
