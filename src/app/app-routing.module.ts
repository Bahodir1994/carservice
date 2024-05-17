import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsComponent} from "./products/products.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {AuthGuard} from "./auth-guard";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: LoginComponent }, // Login route
  {
    path: '',
    canActivate: [AuthGuard], // Protect routes using AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'statistics', component: StatisticsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
