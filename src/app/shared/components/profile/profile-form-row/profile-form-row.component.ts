import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form-row',
  imports: [],
  templateUrl: './profile-form-row.component.html',
})
export class ProfileFormRowComponent {
  @Input() label: string = '';
  @Input() subtext?: string;
  @Input() contentClass?: string;
}
