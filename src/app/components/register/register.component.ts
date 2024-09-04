/*import { Component } from '@angular/core';
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
