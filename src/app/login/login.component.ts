import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../ADMIN/service/auth.service";
import { User } from "../User/user.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  user: User = {
    email: "",
    password: "",
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(event: Event): void {
    event.preventDefault(); // Prevent default form submission

    if (!this.user.email || !this.user.password) {
      console.error("Email and password are required");
      return;
    }

    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        const { token } = response;
        const role = response.role;
        this.authService.setRole(role); // Giving admin role to user

        if (token && role) {
          this.authService.setToken(token);
          localStorage.setItem(
            "user",
            JSON.stringify({ role, email: this.user.email })
          );

          const redirectRoute = role === "admin" ? "/dashboard" : "/dashboard";
          this.router.navigate([redirectRoute]);

          console.log("User logged in with role:", role);
        } else {
          console.error("Unexpected response structure:", response);
        }
      },
      error: (error) => {
        console.error("Login error:", error);
      },
    });
  }
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
