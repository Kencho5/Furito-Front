import { Component } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-empty-orgs',
  imports: [SharedModule, ImageComponent],
  templateUrl: './empty-orgs.component.html',
})
export class EmptyOrgsComponent {}
