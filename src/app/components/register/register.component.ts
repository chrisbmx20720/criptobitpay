import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {
    id: '',
    username: '',
    lastname: '',
    name: '',
    email: '',
    password: '',
    walletId: '',
    country: '',
    province: '',
    phone: '',
    accountTypeId: '',
    accountNumber: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    try {
      // Generar un ID único
      this.user.id = this.generateUniqueId();
      this.user.walletId = `w00${this.user.id.slice(-1)}`; // Generar walletId basado en el ID
      this.user.accountTypeId = `a00${this.user.id.slice(-1)}`; // Generar accountTypeId basado en el ID
      
      // Enviar el nuevo usuario al db.json (simulación de API)
      this.http.post('http://localhost:3000/users', this.user)
        .subscribe(
          response => {
            console.log('User registered successfully:', response);
          },
          error => {
            console.error('Error registering user:', error);
          }
        );
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }

  private generateUniqueId(): string {
    return 'b00' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  }
}
