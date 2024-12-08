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
import { ErrorMessageComponent } from '../../../shared/components/ui/error-message/error-message.component';

@Component({
  selector: 'app-login-form',
  imports: [
    SharedModule,
    AuthFormComponent,
    InputComponent,
    ReactiveFormsModule,
    PasswordToggleComponent,
    ErrorMessageComponent,
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
  submitted: boolean = false;
  authError: string | null = null;

  onSubmit() {
    this.authError = null;
    this.submitted = true;
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value as LoginFields;
    this.authService.loginRequest(credentials).subscribe({
      next: (res) => {
        this.authService.login(res['token']);
      },
      error: (err) => {
        if (err.status === 401) {
          this.authError = 'AUTH.ERROR.wrong_credentials';
        } else {
          this.authError = 'AUTH.ERROR.unforseen';
        }
      },
    });
  }
}
