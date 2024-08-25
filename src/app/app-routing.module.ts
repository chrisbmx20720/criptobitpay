import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

import{ DashboardComponent } from './components/dashboard/dashboard.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirección a 'inicio'
    { path: 'inicio', component: InicioComponent },
    { path: 'messages', component: MessagesComponent },
  ]},
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
