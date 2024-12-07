import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CirclesComponent } from '../../../shared/components/ui/circles/circles.component';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, CirclesComponent],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input() authForm!: FormGroup;
  @Input() onSubmit!: () => void;
  @Input() authTitle!: string;
}
