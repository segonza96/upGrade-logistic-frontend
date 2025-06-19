import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthLayoutComponent } from './features/auth/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './features/logistics/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: 'logistics',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/logistics/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'orders',
        children: [
          {
            path: 'list',
            loadComponent: () => import('./features/logistics/orders/list/orders-list.component').then(m => m.OrdersListComponent)
          },
          {
            path: 'create',
            loadComponent: () => import('./features/logistics/orders/create/orders-create.component').then(m => m.OrdersCreateComponent)
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
