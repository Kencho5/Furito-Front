import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { LoadingDotsComponent } from '@ui/loading-dots/loading-dots.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, LoadingDotsComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
