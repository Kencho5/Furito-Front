import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginFields, LoginResponse } from '@core/modules/interfaces/login';
import { apiUrl } from '@utils/buildUrl';
import {
  RegisterFields,
  RegisterResponse,
} from '@core/modules/interfaces/register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  loginRequest(loginFields: LoginFields): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(apiUrl('login'), loginFields);
  }

  registerRequest(
    registerFields: RegisterFields,
  ): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(apiUrl('register'), registerFields);
  }

  login(token: string, redirect: boolean): void {
    localStorage.setItem('token', token);
    if (redirect) this.router.navigate(['/profile']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  get loggedIn(): boolean {
    if (localStorage.getItem('token')) return true;

    return false;
  }
}
