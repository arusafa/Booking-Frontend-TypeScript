import { Component } from "@angular/core";
import { AuthService } from "../ADMIN/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Booking App";

  constructor(private authService: AuthService, private router: Router) {
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
