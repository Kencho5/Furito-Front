import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() type!: string;
  @Input() placeholder!: string;
}
