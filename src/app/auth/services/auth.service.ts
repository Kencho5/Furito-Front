import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginFields, LoginResponse } from '@core/modules/interfaces/login';
import { apiUrl } from '@utils/buildUrl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginRequest(loginFields: LoginFields): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(apiUrl('login'), loginFields);
  }

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  get loggedIn(): boolean {
    if (localStorage.getItem('token')) return true;

    return false;
  }
}
