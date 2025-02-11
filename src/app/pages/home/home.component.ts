import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HOME_CATEGORIES, HOME_SERVICES } from '@utils/homeObjects';
import { SharedModule } from '@shared/shared.module';
import { PostCardComponent } from '@shared/components/post-card/post-card.component';

@Component({
  selector: 'app-home',
  imports: [
    SharedModule,
    TranslatePipe,
    ImageComponent,
    ReactiveFormsModule,
    PostCardComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}
  SERVICES = HOME_SERVICES;
  CATEGORIES = HOME_CATEGORIES;

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
