import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, SharedModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
