import { Component, Input } from '@angular/core';
import { LoadingDotsComponent } from '../../../shared/components/ui/loading-dots/loading-dots.component';

@Component({
  selector: 'app-auth-skeleton',
  imports: [LoadingDotsComponent],
  templateUrl: './auth-skeleton.component.html',
})
export class AuthSkeletonComponent {
  @Input() width: string = '550';
  @Input() height: string = '550';
}
