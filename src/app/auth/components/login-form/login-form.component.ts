import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginFields } from '../../types/login';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule],
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
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value as LoginFields;
    this.authService.loginRequest(credentials).subscribe({
      next: (res) => {
        this.authService.login(res['token']);
      },
    });
  }
}
