import { Component } from '@angular/core';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputComponent } from '@ui/input/input.component';
import { GetCodeComponent } from '@shared/components/ui/get-code/get-code.component';

@Component({
  selector: 'app-register-form',
  imports: [AuthFormComponent, SharedModule, InputComponent, GetCodeComponent],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  constructor() {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  submitted: boolean = false;
  showPassword: boolean = false;

  onSubmit() {}
}
