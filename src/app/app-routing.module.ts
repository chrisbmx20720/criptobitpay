import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { WalletComponent } from './components/wallet/wallet.component';
import  {IndicesComponent } from './components/indices/indices.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'indices', component: IndicesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, 
    children: [ 
    { path: 'inicio', component: InicioComponent },
    { path: 'wallet', component: WalletComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
  ]
  },
  { path: 'admin', component: AdminComponent,
    children: [{ path: 'user', component: UserComponent }]
   },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
