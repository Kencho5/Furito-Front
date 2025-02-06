import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input() authForm!: FormGroup;
  @Input() authTitle!: string;
  @Output() submitForm = new EventEmitter<void>();
}
