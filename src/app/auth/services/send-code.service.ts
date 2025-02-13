import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '@utils/buildUrl';

@Injectable({
  providedIn: 'root',
})
export class SendCodeService {
  constructor(private http: HttpClient) {}

  sendCodeEmail(type: string, value: string): Observable<void> {
    return this.http.post<void>(apiUrl(type), { email: value });
  }

  verifyEmailCode(email: string, code: string): Observable<void> | null {
    if (code.length != 4) return null;

    return this.http.post<void>(apiUrl('verify-email-code'), {
      email: email,
      code: parseInt(code),
    });
  }
}
