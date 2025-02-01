import { Component } from '@angular/core';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputComponent } from '@ui/input/input.component';

@Component({
  selector: 'app-register-form',
  imports: [AuthFormComponent, SharedModule, InputComponent],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  constructor() {}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  showPassword: boolean = false;

  onSubmit() {}
}
