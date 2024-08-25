import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  walletAmount = 1000; // Ejemplo, reemplaza con tu lógica
  notifications = 5; // Ejemplo, reemplaza con tu lógica
  stockIndices = [
    { name: 'S&P 500', value: 4000 },
    { name: 'DAX', value: 15000 },
    { name: 'FTSE 100', value: 7300 },
    { name: 'Nikkei 225', value: 28000 }
  ]; // Ejemplo, reemplaza con datos reales

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  showMessages() {
    // Lógica para mostrar mensajes
  }

  clearNotifications() {
    this.notifications = 0; // Limpia las notificaciones
  }
}
