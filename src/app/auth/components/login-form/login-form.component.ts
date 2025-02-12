import { Component, signal, WritableSignal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { LoginResponse, LoginFields } from '@core/modules/interfaces/login';
import { SharedModule } from '@shared/shared.module';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { PasswordToggleComponent } from '@shared/components/ui/password-toggle/password-toggle.component';
import { ErrorMessageComponent } from '@shared/components/ui/error-message/error-message.component';
import { SpinnerComponent } from '@shared/components/ui/spinner/spinner.component';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';

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
  loading: WritableSignal<boolean> = signal(false);
  formError: string | null = null;

  onSubmit(): void {
    this.handleErrors();

    if (this.loginForm.invalid) {
      this.submitted = true;
      return;
    }

    this.formError = null;
    this.loading.set(true);

    const credentials = this.loginForm.value as LoginFields;

    this.authService
      .loginRequest(credentials)
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.submitted = true;
        }),
      )
      .subscribe({
        next: (response: LoginResponse) => {
          this.authService.login(response.token, true);
        },
        error: (response: HttpErrorResponse) => {
          if (response.status == 500) {
            this.formError = 'AUTH.ERROR.unforseen';
            return;
          }

          this.formError = response.error.message;
        },
      });
  }

  handleErrors() {
    for (const control in this.loginForm.controls) {
      if (this.loginForm.get(control)?.errors) {
        this.formError = `AUTH.ERROR.FORM.${control}`;
        break;
      }
      this.formError = '';
    }
  }
}
