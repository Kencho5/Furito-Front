import { Component } from '@angular/core';
import { AuthHeaderComponent } from '../auth-header/auth-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthHeaderComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {}
