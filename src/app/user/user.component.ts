import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  notifications: number = 3;
  viewingMessages: boolean = false;

  // Mostrar la vista de mensajes
  showMessages(): void {
    this.viewingMessages = true;
  }

  // Limpiar las notificaciones cuando se hace clic en la campanita
  clearNotifications(): void {
    this.notifications = 0;
  }
}
