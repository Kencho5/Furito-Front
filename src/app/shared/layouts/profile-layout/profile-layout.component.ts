import { Component } from '@angular/core';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile-layout',
  imports: [SharedModule, NavbarComponent],
  templateUrl: './profile-layout.component.html',
})
export class ProfileLayoutComponent {}
