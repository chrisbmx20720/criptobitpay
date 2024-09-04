/*import { Component, OnInit } from '@angular/core';
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
          
          // Generar walletId y accountTypeId basado en el ID
          this.user.walletId = `w00${this.user.id.slice(-1)}`; 
          this.user.accountTypeId = `a00${this.user.id.slice(-1)}`;
          this.user.accountNumber = this.generateAccountNumber(); // Generar accountNumber
          
          // Crear un nuevo wallet con valores en cero y fechas vacías
          const newWallet = {
            id: this.user.walletId,
            userId: this.user.id,
            coins: [
              {
                id: 'c001',
                name: 'Bitcoin',
                hedgeFundInvestment: 0,
                bonificat: 0,
                hedgeProtectionInsurance: 0,
                optQuantity: 0,
                strikePrice: 0,
                expirationDate: '', // Fecha vacía
                earnings: 0
              },
              {
                id: 'c002',
                name: 'Ethereum',
                hedgeFundInvestment: 0,
                bonificat: 0,
                hedgeProtectionInsurance: 0,
                optQuantity: 0,
                strikePrice: 0,
                expirationDate: '', // Fecha vacía
                earnings: 0
              },
              {
                id: 'c003',
                name: 'Gold',
                hedgeFundInvestment: 0,
                bonificat: 0,
                hedgeProtectionInsurance: 0,
                optQuantity: 0,
                strikePrice: 0,
                expirationDate: '', // Fecha vacía
                earnings: 0
              },
              {
                id: 'c004',
                name: 'Binance',
                hedgeFundInvestment: 0,
                bonificat: 0,
                hedgeProtectionInsurance: 0,
                optQuantity: 0,
                strikePrice: 0,
                expirationDate: '', // Fecha vacía
                earnings: 0
              }
            ]
          };

          // Enviar el nuevo wallet al db.json (simulación de API)
          this.http.post('http://localhost:3000/wallets', newWallet).subscribe(
            walletResponse => {
              console.log('Wallet creado exitosamente:', walletResponse);
              // Enviar el nuevo usuario al db.json (simulación de API)
              this.http.post('http://localhost:3000/users', this.user).subscribe(
                response => {
                  console.log('Usuario registrado exitosamente:', response);
                  alert("Usuario registrado exitosamente");
                },
                error => {
                  console.error('Error al registrar el usuario:', error);
                }
              );
            },
            error => {
              console.error('Error al crear el wallet:', error);
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

  private generateAccountNumber(): string {
    // Genera un número de cuenta con un formato específico
    const prefix = '5645323498'; // Ejemplo de prefijo fijo
    const suffix = Math.floor(Math.random() * 100).toString().padStart(2, '0'); // Sufijo aleatorio de 2 dígitos
    const countryCode = 'ES'; // Código de país fijo, puede ser dinámico según tus necesidades

    return `${prefix}${suffix}${countryCode}`;
  }

  public extractCountryCode(accountNumber: string): string {
    // Extrae el código de país del número de cuenta
    const countryCode = accountNumber.slice(-2); // Asume que el código de país está en los últimos 2 caracteres
    return countryCode;
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required],
      province: ['', Validators.required],
      phone: ['', Validators.required],
      accountNumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Aquí puedes manejar el envío del formulario, como enviar los datos a un backend
    }
  }
}
