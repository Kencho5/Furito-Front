import { Component } from '@angular/core';
import { AuthSkeletonComponent } from '@auth/components/auth-skeleton/auth-skeleton.component';
import { LoginFormComponent } from '@auth/components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, AuthSkeletonComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
