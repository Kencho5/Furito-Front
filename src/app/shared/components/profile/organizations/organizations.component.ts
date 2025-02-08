import { Component } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-organizations',
  imports: [SharedModule, ImageComponent],
  templateUrl: './organizations.component.html',
})
export class OrganizationsComponent {}
