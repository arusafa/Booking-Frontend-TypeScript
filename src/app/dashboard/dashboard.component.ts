import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../ADMIN/service/auth.service";
import { User } from "../User/user.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  user: User = {
    email: "",
    password: "",
    username: "",
    firstName: "",
  };

  constructor(private authService: AuthService, private router: Router) {
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        this.user = JSON.parse(userData);
        console.log("User data loaded:", this.user);
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    } else {
      console.log("No user data found in localStorage");
    }
  }
  onHotelListClick() {
    this.router.navigate(["/hotel-list"]);
  }
  onHotelCreateClick() {
    this.router.navigate(["/add-hotel"]);
  }
  onRoomListClick() {
    this.router.navigate(["/room-list"]);
  }
  onRoomCreateClick() {
    this.router.navigate(["/add-room"]);
  }
  onAddRoomToHotel() {
    this.router.navigate(["/add-room/:hotelId"]);
  }

  onLogoutClick() {
    this.authService.logout();
    console.log("User logged out");
    this.router.navigate(["/login"]);
  }
}
