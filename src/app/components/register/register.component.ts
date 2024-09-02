import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountTypeService } from '../../services/account-type.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  accountTypes: any[] = []; // Variable para almacenar los tipos de cuenta

  constructor(private http: HttpClient, private accountTypeService: AccountTypeService) {}

  ngOnInit() {
    // Cargar los tipos de cuenta al inicializar el componente
    this.accountTypeService.getAccountTypes().subscribe(
      data => {
        this.accountTypes = data;
      },
      error => {
        console.error('Error fetching account types:', error);
      }
    );
  }

  onSubmit() {
    try {
      // Validar si el correo ya está registrado
      this.http.get<any[]>(`http://localhost:3000/users?email=${this.user.email}`).subscribe(users => {
        if (users.length > 0) {
          // Si el correo ya existe
          alert('El correo ya está registrado. Por favor, utiliza otro.');
        } else {
          // Generar un ID único
          this.user.id = this.generateUniqueId();
          this.user.walletId = `w00${this.user.id.slice(-1)}`; // Generar walletId basado en el ID
          this.user.accountTypeId = `a00${this.user.id.slice(-1)}`; // Generar accountTypeId basado en el ID
          
          // Enviar el nuevo usuario al db.json (simulación de API)
          this.http.post('http://localhost:3000/users', this.user)
            .subscribe(
              response => {
                console.log('Usuario registrado exitosamente:', response);
                alert("Usuario registrado exitosamente");
              },
              error => {
                console.error('Error al registrar el usuario:', error);
              }
            );
        }
      });
    } catch (error) {
      console.error('Error inesperado:', error);
    }
  }

  private generateUniqueId(): string {
    return 'b00' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  }
}
