import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../User/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = new User('', '');
  constructor(private authService: AuthService, private router: Router) {}

  onSignup(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.authService
      .signup(
        form.value.email,
        form.value.password,
        form.value.username,
        form.value.firstName,
        form.value.lastName,
        form.value.phoneNumber
      )
      .subscribe({
        next: (response) => {
          // Handle successful signup, e.g., by navigating to a login page or directly logging in the user
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Handle signup error, e.g., by showing an error message
          console.error(error);
        },
      });
  }
}
