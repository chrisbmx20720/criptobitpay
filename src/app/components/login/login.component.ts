import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(): void {
    this.authService.validateUser(this.username, this.password).subscribe(user => {
      if (user) {
        localStorage.clear();
        localStorage.setItem('walletId', user.walletId);

        this.router.navigate(['/dashboard']);
        
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
  }
}
