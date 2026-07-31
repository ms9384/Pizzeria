import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password.';
      return;
    }

    const success = this.authService.login(
      this.email,
      this.password
    );

    if (success) {

      this.router.navigate(['/home']);

    } else {

      this.errorMessage = 'Invalid email or password.';

    }
  }
}