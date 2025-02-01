import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() control = new FormControl();
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() error?: boolean;
}
