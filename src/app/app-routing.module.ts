import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { IndicesComponent } from './components/indices/indices.component'
import { AdminWalletComponent } from './components/admin-wallet/admin-wallet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'indices', component: IndicesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, 
    children: [ 
      { path: 'home', component: InicioComponent },
      {path:'wallet', component :WalletComponent},
      { path: 'wallet/:walletId', component: WalletComponent }, // Actualizado para incluir walletId
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'admin/:walletId', component: AdminWalletComponent},
      { path: 'users', component: UserComponent } // Agregado para UsersComponent en Admin
    ]
  },
  { path: 'user', component: UserComponent },
  { path: 'users', component: UserComponent }, // Agregado para mostrar la lista de usuarios
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
