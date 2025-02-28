import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-profile-form',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  constructor(public location: Location) {}

  @Output() submitForm = new EventEmitter<void>();
  @Input() profileForm!: FormGroup;
}
