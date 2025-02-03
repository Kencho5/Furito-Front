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
  ],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');
    return password && repeatPassword && password.value === repeatPassword.value
      ? null
      : { passwordMismatch: true };
  };

  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: [this.passwordMatchValidator] },
  );

  phoneCodes: ComboboxItems[] = phoneCodes;

  submitted: boolean = false;
  showPassword: boolean = false;
  showRepeatPassword: boolean = false;
  termsChecked: boolean = false;
  loading = signal<boolean>(false);

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    }

    this.loading.set(true);
  }
}
