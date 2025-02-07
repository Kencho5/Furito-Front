import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
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
    children: [{ path: '', component: HomeComponent }],
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
