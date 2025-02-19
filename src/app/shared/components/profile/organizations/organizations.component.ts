import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EmptyOrgsComponent } from '../empty-orgs/empty-orgs.component';
import { OrgsService } from '@core/services/profile/orgs.service';
import { GetOrgsResponse } from '@core/modules/interfaces/organizations';
import { finalize } from 'rxjs';
import { OrgCardComponent } from '../org-card/org-card.component';

@Component({
  selector: 'app-organizations',
  imports: [SharedModule, EmptyOrgsComponent, OrgCardComponent],
  templateUrl: './organizations.component.html',
})
export class OrganizationsComponent {
  constructor(private orgsService: OrgsService) {}

  loading = signal<boolean>(true);
  orgs = signal<GetOrgsResponse | null>(null);
  hasOrgs = computed(() => (this.orgs()?.total ?? 0) > 0);

  ngOnInit() {
    this.orgsService
      .getOrgs()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe((res: GetOrgsResponse) => this.orgs.set(res));
  }
}
