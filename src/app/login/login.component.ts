import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../User/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User('', '');
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.authService.login(form.value.email, form.value.password).subscribe({
      next: (response) => {
        // Handle successful login, e.g., by storing the token and navigating to a dashboard
        console.log(response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        // Handle login error, e.g., by showing an error message
        console.error(error);
      }
    });
  }
}
