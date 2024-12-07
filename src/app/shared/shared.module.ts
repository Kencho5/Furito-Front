import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [RouterOutlet, RouterLink, CommonModule, TranslatePipe],
  exports: [RouterOutlet, RouterLink, CommonModule, TranslatePipe],
})
export class SharedModule {}
