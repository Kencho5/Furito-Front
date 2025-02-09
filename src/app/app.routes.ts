import { Routes } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';
import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';
import { LayoutComponent } from '@shared/layouts/layout/layout.component';
import { RegisterComponent } from '@pages/register/register.component';
import { ProfileLayoutComponent } from '@shared/layouts/profile-layout/profile-layout.component';
import { AuthGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
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
    path: 'profile',
    component: ProfileLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      {
        path: 'organizations',
        loadComponent: () =>
          import(
            './shared/components/profile/organizations/organizations.component'
          ).then((m) => m.OrganizationsComponent),
      },
      {
        path: 'add-org',
        loadComponent: () =>
          import('./shared/components/profile/add-org/add-org.component').then(
            (m) => m.AddOrgComponent,
          ),
      },
      {
        path: 'info',
        loadComponent: () =>
          import(
            './shared/components/profile/user-info/user-info.component'
          ).then((m) => m.UserInfoComponent),
      },
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
