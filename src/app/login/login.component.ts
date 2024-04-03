import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
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

  onLogin(): void {
    if (!this.user.email || !this.user.password) {
      return;
    }
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log("Login response:", response);
        if (response.token && response.role) {
          this.authService.setToken(response.token);

          const userWithRole = {
            ...response.user,
            role: response.role,  
            email: this.user.email,
          };
          console.log("Storing user with role and email:", userWithRole);
          localStorage.setItem("user", JSON.stringify(userWithRole));

          this.router.navigate(["/dashboard"]);
          console.log("User logged in with role:", response.role);
        } else {
          console.error("Invalid response structure:", response);
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
    
  }
}
