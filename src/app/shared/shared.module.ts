import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@NgModule({
  imports: [RouterOutlet, RouterLink, CommonModule, TranslocoModule],
  exports: [RouterOutlet, RouterLink, CommonModule, TranslocoModule],
})
export class SharedModule {}
