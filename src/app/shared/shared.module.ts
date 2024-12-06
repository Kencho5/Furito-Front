import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { OutsideClickDirective } from '../core/directives/outside-click.directive';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    TranslateModule,
    OutsideClickDirective,
  ],
  exports: [NavbarComponent, TranslateModule, OutsideClickDirective],
})
export class SharedModule {}
