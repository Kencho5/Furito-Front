import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-toggle',
  imports: [],
  templateUrl: './password-toggle.component.html',
})
export class PasswordToggleComponent {
  showPassword: boolean = false;
  @Output() showPasswordChange = new EventEmitter<boolean>();

  public toggle() {
    this.showPassword = !this.showPassword;
    this.showPasswordChange.emit(this.showPassword);
  }
}
