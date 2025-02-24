import { Component, Input, signal } from '@angular/core';
import { Org } from '@core/modules/interfaces/organizations';
import { ImageComponent } from '@shared/components/image/image.component';
import { environment } from '@environments/environment';
import { SharedModule } from '@shared/shared.module';
import { OrgsService } from '@core/services/profile/orgs.service';
import { ToastService } from '@core/services/toast.service';

@Component({
  selector: 'app-org-card',
  imports: [ImageComponent, SharedModule],
  templateUrl: './org-card.component.html',
})
export class OrgCardComponent {
  constructor(
    private orgsService: OrgsService,
    private toastService: ToastService,
  ) {}

  @Input() org!: Org;
  enabled = signal<boolean>(false);

  ngOnInit() {
    this.enabled.set(this.org.enabled);
  }

  toggleOrgStatus() {
    this.enabled.set(!this.enabled());

    this.orgsService.toggleOrgStatus(this.org.id).subscribe({
      next: () => {
        this.org.enabled = this.enabled();
        this.toastService.add(
          !this.enabled() ? 'ORGS.TOAST.disable' : 'ORGS.TOAST.enable',
          !this.enabled()
            ? 'ORGS.TOAST.disable_subtext'
            : 'ORGS.TOAST.enable_subtext',
          3000,
          'success',
        );
      },
      error: () => {
        this.enabled.set(false);
        this.toastService.add(
          'ORGS.TOAST.disable',
          'ORGS.TOAST.disable_subtext',
          3000,
          'error',
        );
      },
    });
  }

  getLogoUrl(id: number, code: string): string {
    return `${environment.orgLogosUrl}${id}-${code}.jpg`;
  }
}
