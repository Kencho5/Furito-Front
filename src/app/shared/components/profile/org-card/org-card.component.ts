import { Component, Input } from '@angular/core';
import { AddOrgFields } from '@core/modules/interfaces/organizations';
import { ImageComponent } from '@shared/components/image/image.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-org-card',
  imports: [ImageComponent],
  templateUrl: './org-card.component.html',
})
export class OrgCardComponent {
  @Input() org!: AddOrgFields;

  getLogoUrl(name: string, code: string): string {
    const formattedName = name.replace(/ /g, '+');
    return `${environment.orgLogosUrl}${formattedName}-${code}.jpg`;
  }
}
