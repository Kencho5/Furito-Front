import { Component } from '@angular/core';
import { AuthSkeletonComponent } from '../../auth/components/auth-skeleton/auth-skeleton.component';
import { RegisterFormComponent } from '../../auth/components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  imports: [AuthSkeletonComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
