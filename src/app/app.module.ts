import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Router } from 'express';
import { IndicesComponent } from './components/indices/indices.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    MessagesComponent,
    NavbarComponent,
    InicioComponent,
    UserChartComponent,
    DashboardComponent,
    IndicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
