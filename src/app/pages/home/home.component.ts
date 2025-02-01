import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth/services/auth.service';
import { TranslatePipe } from '@ngx-translate/core';
import { ComboboxComponent } from '@shared/components/ui/combobox/combobox.component';
import { servicesList } from '@utils/servicesList';
import { ComboboxItems } from '@core/modules/interfaces/comboboxItems';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslatePipe, ComboboxComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public authService: AuthService) {}

  servicesList: ComboboxItems[] = servicesList;
}
