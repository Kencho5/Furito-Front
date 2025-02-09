import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SERVICES } from '@utils/homeServices';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-home',
  imports: [SharedModule, TranslatePipe, ImageComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}
  SERVICES = SERVICES;

  searchForm = new FormGroup({
    text: new FormControl(''),
  });

  search(): void {
    const query = this.searchForm.value.text?.trim();

    if (query) {
      this.router.navigate(['/search'], { queryParams: { text: query } });
    }
  }
}
