import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, NavbarComponent, TranslateModule],
  exports: [NavbarComponent, TranslateModule],
})
export class SharedModule {}
