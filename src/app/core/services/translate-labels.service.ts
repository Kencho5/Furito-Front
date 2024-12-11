import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateLabelsService {
  constructor(private translate: TranslateService) {}

  translateLabel(label: string): string {
    return this.translate.instant(label);
  }
}
