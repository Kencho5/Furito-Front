import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from '@core/services/loading.service';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { LoadingDotsComponent } from '@ui/loading-dots/loading-dots.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
    LoadingDotsComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(public loadingService: LoadingService) {}
}
