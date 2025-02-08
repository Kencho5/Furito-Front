import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ImageComponent } from '@shared/components/image/image.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslatePipe, ImageComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
