import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SideNavComponent } from './side-nav/side-nav.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'side-nav', component: SideNavComponent},
  {path: 'auth', component: AuthComponent, children: [
    {path: 'sign-in', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
