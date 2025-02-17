import { Component } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { SharedModule } from '@shared/shared.module';
import { EmptyOrgsComponent } from '../empty-orgs/empty-orgs.component';
import { OrgsService } from '@core/services/profile/orgs.service';

@Component({
  selector: 'app-organizations',
  imports: [SharedModule, ImageComponent, EmptyOrgsComponent],
  templateUrl: './organizations.component.html',
})
export class OrganizationsComponent {
  constructor(private orgsService: OrgsService) {}

  ngOnInit() {
    this.orgsService.getOrgs().subscribe();
  }
}
