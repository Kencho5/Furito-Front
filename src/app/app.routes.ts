import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { LoginComponent } from '@pages/login/login.component';
import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';
import { LayoutComponent } from '@shared/layouts/layout/layout.component';
import { RegisterComponent } from '@pages/register/register.component';
import { ProfileComponent } from '@pages/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: '**',
    component: LayoutComponent,
    children: [
      {
        path: '**',
        loadComponent: () =>
          import('./shared/components/not-found/not-found.component').then(
            (m) => m.NotFoundComponent,
          ),
      },
    ],
  },
];
