import { Component, Input, signal } from '@angular/core';
import { AddOrgFields } from '@core/modules/interfaces/organizations';
import { ImageComponent } from '@shared/components/image/image.component';
import { environment } from '@environments/environment';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-org-card',
  imports: [ImageComponent, SharedModule],
  templateUrl: './org-card.component.html',
})
export class OrgCardComponent {
  @Input() org!: AddOrgFields;
  disabled = signal<boolean>(false);

  disableOrg() {
    this.disabled.set(!this.disabled());
  }

  getLogoUrl(id: number, code: string): string {
    return `${environment.orgLogosUrl}${id}-${code}.jpg`;
  }
}
