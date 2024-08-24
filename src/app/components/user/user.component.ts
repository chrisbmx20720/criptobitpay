import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  walletAmount: number = 2000; // Ejemplo de monto de dinero en la billetera
  notifications: number = 5; // Ejemplo de notificaciones
  viewingMessages: boolean = false; // Estado para saber si se están viendo los mensajes

  showMessages() {
    this.viewingMessages = true;
  }

  clearNotifications() {
    this.notifications = 0;
  }
}
