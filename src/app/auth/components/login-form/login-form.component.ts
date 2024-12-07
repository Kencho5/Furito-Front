import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { LoginFields } from '../../../auth/types/login';
import { SharedModule } from '../../../shared/shared.module';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { PasswordToggleComponent } from '../../../shared/components/ui/password-toggle/password-toggle.component';

@Component({
  selector: 'app-login-form',
  imports: [
    SharedModule,
    AuthFormComponent,
    InputComponent,
    ReactiveFormsModule,
    PasswordToggleComponent,
  ],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  showPassword: boolean = false;

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value as LoginFields;
    this.authService.loginRequest(credentials).subscribe({
      next: (res) => {
        this.authService.login(res['token']);
      },
    });
  }
}
