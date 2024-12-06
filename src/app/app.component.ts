import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ge', 'en']);
    this.translate.setDefaultLang('ge');

    this.translate.use(localStorage.getItem('lang') || 'ge');
  }
}
