import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input() src!: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() alt: string = '';

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
