import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { DropdownComponent } from '@shared/components/ui/dropdown/dropdown.component';
import { SharedModule } from '@shared/shared.module';
import { TABS } from '@utils/sidebarTabs';

@Component({
  selector: 'app-profile-sidebar',
  imports: [SharedModule, RouterModule, DropdownComponent],
  templateUrl: './profile-sidebar.component.html',
})
export class ProfileSidebarComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  activeTab: string = '';
  TABS = TABS;

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

  get label() {
    return this.TABS.find((tab) => tab.url === this.router.url)?.label || '';
  }

  get icon() {
    return this.TABS.find((tab) => tab.url === this.router.url)?.icon;
  }
}
