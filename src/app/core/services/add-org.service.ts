import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AddOrgFields,
  AddOrgResponse,
} from '@core/modules/interfaces/organizations';
import { apiUrl } from '@utils/buildUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddOrgService {
  constructor(private http: HttpClient) {}

  addOrg(orgFields: AddOrgFields): Observable<AddOrgResponse> {
    return this.http.post<AddOrgResponse>(apiUrl('add-org'), orgFields);
  }

  putLogo(url: string, logo: Blob): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'image/jpeg',
    });

    return this.http.put(url, logo, { headers });
  }
}
