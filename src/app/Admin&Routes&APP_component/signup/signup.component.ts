import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../ADMIN/service/auth.service";
import { User } from "../../MODELS/user.model";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  user: User = {
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  constructor(private authService: AuthService, private router: Router) {}

  onSignup(event: Event): void {
    event.preventDefault(); // Prevent default form submission
    if (
      !this.user.email ||
      !this.user.password ||
      !this.user.username ||
      !this.user.firstName ||
      !this.user.lastName ||
      !this.user.phoneNumber
    ) {
      // Maybe show an error message here because the form is incomplete
      return;
    }
    this.authService
      .signup(
        this.user.email,
        this.user.password,
        this.user.username,
        this.user.firstName,
        this.user.lastName,
        this.user.phoneNumber
      )
      .subscribe({
        next: (response) => {
          // Handle successful signup
          console.log(response);
          this.router.navigate(["/login"]);
        },
        error: (error) => {
          // Handle signup error
          // If the status is 201, navigate to login
          if (error.status === 201) {
            this.router.navigate(["/login"]);
          } else {
            // Otherwise log the error and possibly show an error message to the user
            console.error(error);
          }
        },
      });
  }
  showPassword: boolean = false;
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
