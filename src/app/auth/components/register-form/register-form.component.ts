import { Component, signal } from '@angular/core';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { SharedModule } from '@shared/shared.module';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { InputComponent } from '@ui/input/input.component';
import { GetCodeComponent } from '@shared/components/ui/get-code/get-code.component';
import { ComboboxComponent } from '@shared/components/ui/combobox/combobox.component';
import { phoneCodes } from '@utils/phoneCodes';
import { ComboboxItems } from '@core/modules/interfaces/comboboxItems';
import { PasswordToggleComponent } from '@shared/components/ui/password-toggle/password-toggle.component';
import { SpinnerComponent } from '@shared/components/ui/spinner/spinner.component';
import { ErrorMessageComponent } from '@shared/components/ui/error-message/error-message.component';
import {
  RegisterFields,
  RegisterResponse,
} from '@core/modules/interfaces/register';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '@auth/services/auth.service';
import { finalize } from 'rxjs';
import { SendCodeService } from '@auth/services/send-code.service';

@Component({
  selector: 'app-register-form',
  imports: [
    AuthFormComponent,
    SharedModule,
    InputComponent,
    GetCodeComponent,
    ComboboxComponent,
    PasswordToggleComponent,
    SpinnerComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  constructor(
    private authService: AuthService,
    public sendCodeService: SendCodeService,
  ) {}

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password === repeatPassword && password !== null
      ? null
      : { passwordMismatch: true };
  };

  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      email_code: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      phone: new FormControl('', [Validators.required]),
      phone_code: new FormControl('995', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      terms: new FormControl(false, [Validators.requiredTrue]),
    },
    { validators: [this.passwordMatchValidator] },
  );

  phoneCodes: ComboboxItems[] = phoneCodes;

  submitted: boolean = false;
  showPassword: boolean = false;
  showInput: boolean = false;
  termsChecked: boolean = false;
  formError = signal<string>('');
  codeError = signal<string>('');
  loading = signal<boolean>(false);
  success: boolean = false;

  toggleTerms(): void {
    this.termsChecked = !this.termsChecked;
    this.registerForm.controls.terms.setValue(this.termsChecked);
  }

  onSubmit(): void {
    this.handleErrors();

    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    }

    this.formError.set('');
    this.loading.set(true);

    const formValue = this.registerForm.value;
    const credentials: RegisterFields = {
      name: formValue.name!,
      surname: formValue.surname!,
      email: formValue.email!,
      phone_code: formValue.phone_code!,
      phone: formValue.phone!,
      password: formValue.password!,
    };

    this.authService
      .registerRequest(credentials)
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.submitted = true;
        }),
      )
      .subscribe({
        next: (response: RegisterResponse) => {
          this.success = true;
          this.authService.login(response.token, false);
        },
        error: (response: HttpErrorResponse) => {
          if (!response.error.message) {
            this.formError.set('AUTH.ERROR.unforseen');
            return;
          }

          this.formError.set(response.error.message);
        },
      });
  }

  handleErrors() {
    for (const control in this.registerForm.controls) {
      if (this.registerForm.get(control)?.errors) {
        this.formError.set(`AUTH.ERROR.FORM.${control}`);
        break;
      }
      this.formError.set('');
    }

    if (this.registerForm.errors?.['passwordMismatch']) {
      this.formError.set('AUTH.ERROR.FORM.password_mismatch');
      return;
    }
  }

  verifyEmailCode() {
    const form = this.registerForm.controls;

    this.sendCodeService
      .verifyEmailCode(form.email.value!, form.email_code.value!)
      ?.subscribe({
        next: () => {
          this.codeError.set('');
          this.registerForm.controls.email_code.disable();
        },
        error: (response: HttpErrorResponse) => {
          this.codeError.set(response.error.message);
        },
      });
  }
}
