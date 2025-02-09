import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslatePipe, ImageComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

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
