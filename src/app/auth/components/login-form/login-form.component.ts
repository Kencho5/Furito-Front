import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import {
  LoginResponse,
  LoginFields,
} from '../../../core/modules/interfaces/login';
import { SharedModule } from '../../../shared/shared.module';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { PasswordToggleComponent } from '../../../shared/components/ui/password-toggle/password-toggle.component';
import { ErrorMessageComponent } from '../../../shared/components/ui/error-message/error-message.component';
import { SpinnerComponent } from '../../../shared/components/ui/spinner/spinner.component';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { ComboboxComponent } from '../../../shared/components/ui/combobox/combobox.component';
import { phoneCodes } from '../../../utils/phoneCodes';

@Component({
  selector: 'app-login-form',
  imports: [
    SharedModule,
    AuthFormComponent,
    InputComponent,
    ReactiveFormsModule,
    PasswordToggleComponent,
    ErrorMessageComponent,
    SpinnerComponent,
    ComboboxComponent,
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
  loading: boolean = false;
  authError: string | null = null;
  phoneCodes = phoneCodes;

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.submitted = true;
      return;
    }

    this.authError = null;
    this.loading = true;

    const credentials = this.loginForm.value as LoginFields;

    this.authService
      .loginRequest(credentials)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.submitted = true;
        }),
      )
      .subscribe({
        next: (response: LoginResponse) => {
          this.authService.login(response.token);
        },
        error: (error: HttpErrorResponse) => {
          this.handleLoginError(error);
        },
      });
  }

  private handleLoginError(error: HttpErrorResponse): void {
    this.authError =
      error.status === 401
        ? 'AUTH.ERROR.wrong_credentials'
        : 'AUTH.ERROR.unforseen';
  }
}
