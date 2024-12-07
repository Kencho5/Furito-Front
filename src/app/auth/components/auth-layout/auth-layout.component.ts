import { Component } from '@angular/core';
import { AuthHeaderComponent } from '../auth-header/auth-header.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthHeaderComponent, SharedModule],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {}
