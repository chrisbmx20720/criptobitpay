import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailValidatorService } from '../../services/email-validator.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  lastname: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  country: string = '';
  province: string = '';
  phone: string = '';
  accountTypeId: string = '';
  accountNumber: string = '';

  emailError: string | null = null;

  constructor(private emailValidator: EmailValidatorService) {}

  async onRegister(form: NgForm): Promise<void> {
    if (form.valid) {
      this.emailError = null; // Resetea el mensaje de error antes de la verificación

      const emailTaken = await this.emailValidator.isEmailTaken(this.email);
      if (emailTaken) {
        this.emailError = 'This email is already registered.';
      } else {
        // Procesar el formulario si el correo electrónico no está registrado
        console.log('Form Data:', form.value);
        // Aquí puedes agregar la lógica para enviar los datos del formulario
      }
    }
  }
}
