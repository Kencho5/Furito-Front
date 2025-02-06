import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-organizations',
  imports: [SharedModule],
  templateUrl: './organizations.component.html',
})
export class OrganizationsComponent {}
