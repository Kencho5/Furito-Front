import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '@utils/buildUrl';
import { GetOrgsResponse } from '@core/modules/interfaces/organizations';

@Injectable({
  providedIn: 'root',
})
export class OrgsService {
  constructor(private http: HttpClient) {}

  getOrgs(): Observable<GetOrgsResponse> {
    return this.http.post<GetOrgsResponse>(apiUrl('get-orgs'), {});
  }

  toggleOrgStatus(id: number): Observable<void> {
    return this.http.post<void>(apiUrl('toggle-org-status'), { id });
  }
}
