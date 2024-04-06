import { Component } from "@angular/core";
import { AuthService } from "../ADMIN/service/auth.service";
import { Router } from "@angular/router";
import { User } from "../../MODELS/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"], // Note: It should be styleUrls not styleUrl
})
export class AppComponent {
  title = "Booking App";
  user: User = { email: "", password: "" };

  constructor(private authService: AuthService, private router: Router) {
    this.loadUserData();
  }

  loadUserData() {
    // Consider updating this to use a method from AuthService that retrieves the user details
    const userData = this.authService.getUserDetails();
    if (userData) {
      this.user = userData;
      console.log("User data loaded:", this.user);
    } else {
      console.log("No user data found");
    }
  }

  onLogoutClick() {
    this.authService.logout();
    console.log("User logged out");
    this.router.navigate(["/login"]);
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
