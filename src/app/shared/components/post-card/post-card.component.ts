import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-post-card',
  imports: [SharedModule, ImageComponent],
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {}
