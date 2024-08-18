import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';  // Importar el componente de mensajes
import { InicioComponent } from './inicio/inicio.component'; // Importar el componente de inicio

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent, children: [
    { path: 'inicio', component: InicioComponent }, // Ruta para la vista de inicio
    { path: 'messages', component: MessagesComponent } // Ruta para mensajes
  ] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
