import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ImageComponent } from '../image/image.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [SharedModule, ImageComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }
}
