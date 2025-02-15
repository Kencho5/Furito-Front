import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddOrgFields } from '@core/modules/interfaces/organizations';
import { apiUrl } from '@utils/buildUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddOrgService {
  constructor(private http: HttpClient) {}

  addOrg(orgFields: AddOrgFields): Observable<void> {
    return this.http.post<void>(apiUrl('add-org'), orgFields);
  }
}
